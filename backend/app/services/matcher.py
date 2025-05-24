import json
import math

def load_data():
    with open("data/ships.json") as f:
        ships = json.load(f)
    with open("data/cargos.json") as f:
        cargos = json.load(f)
    return ships, cargos

def haversine(lat1, lon1, lat2, lon2):
    from math import radians, sin, cos, sqrt, atan2
    R = 6371
    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat/2)**2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    return R * c

def match_ships(cargo_id):
    ships, cargos = load_data()
    cargo = next((c for c in cargos if c["id"] == cargo_id), None)
    if not cargo:
        return []

    results = []
    for ship in ships:
        if abs(ship["dwt"] - cargo["tons"]) > cargo["tons"] * 0.2:
            continue
        distance = haversine(ship["lat"], ship["lon"], cargo["port_lat"], cargo["port_lon"])
        score = 100 - distance * 0.1 + ship["rating"] * 0.5
        results.append({
            "ship_id": ship["id"],
            "ship_name": ship["name"],
            "dwt": ship["dwt"],
            "distance_km": round(distance, 2),
            "match_score": round(score, 2),
            "location": [ship["lat"], ship["lon"]],
            "cargo_location": [cargo["port_lat"], cargo["port_lon"]]
        })

    results.sort(key=lambda x: -x["match_score"])
    return results[:3]
