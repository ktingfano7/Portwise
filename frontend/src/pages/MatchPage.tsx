import React, { useState } from "react";
import MapView from "../components/MapView";

function MatchPage() {
  const [cargoId, setCargoId] = useState<number>(1);
  const [matches, setMatches] = useState<any[]>([]);

  const fetchMatches = async () => {
    try {
      const res = await fetch(`/api/match?cargo_id=${cargoId}`);
      const data = await res.json();
      setMatches(data.matches);
    } catch (error) {
      console.error("获取匹配失败：", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Portwise 散货智能匹配</h1>
      <p>选择货物，点击按钮获取推荐船舶：</p>

      <select
        value={cargoId}
        onChange={(e) => setCargoId(Number(e.target.value))}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      >
        <option value={1}>Brazil Soybeans</option>
        <option value={2}>Indonesian Coal</option>
      </select>

      <button onClick={fetchMatches} style={{ padding: "0.5rem 1rem" }}>
        获取匹配
      </button>

      <hr style={{ margin: "2rem 0" }} />

      <h2>推荐结果</h2>
      {matches.length === 0 ? (
        <p>暂无结果</p>
      ) : (
        <ul>
          {matches.map((m, i) => (
            <li key={i} style={{ marginBottom: "1rem" }}>
              <strong>{m.ship_name}</strong> — 距离: {m.distance_km} km — 匹配得分: {m.match_score}
              <br />
              船位置: [{m.location[0]}, {m.location[1]}] → 货物港口: [{m.cargo_location[0]}, {m.cargo_location[1]}]
            </li>
          ))}
        </ul>
      )}

      <MapView routes={matches} />
    </div>
  );
}

export default MatchPage;
