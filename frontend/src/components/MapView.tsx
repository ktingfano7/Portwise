import React from "react";

interface Props {
  routes: {
    ship_name: string;
    location: [number, number];
    cargo_location: [number, number];
  }[];
}

function MapView({ routes }: Props) {
  return (
    <div>
      <h3>地图路径（待接入）</h3>
      {routes.map((r, i) => (
        <p key={i}>
          {r.ship_name}: [{r.location.join(", ")}] → [{r.cargo_location.join(", ")}]
        </p>
      ))}
    </div>
  );
}

export default MapView;
