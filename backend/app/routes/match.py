from fastapi import APIRouter, Query
from backend.app.services.matcher import match_ships

router = APIRouter()

@router.get("/match")
def get_matches(cargo_id: int = Query(..., description="Cargo ID to match")):
    return {"matches": match_ships(cargo_id)}
