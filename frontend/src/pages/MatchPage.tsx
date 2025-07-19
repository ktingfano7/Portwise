import React, { useState } from "react";
import { FakeMatchService } from "../services/FakeMatchService";
import type { MatchResult } from "../services/FakeMatchService";
import MatchResultCard from "../component/MatchResultCard";

const MatchPage = () => {
  const [selectedCargo, setSelectedCargo] = useState<string>("");
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

  const handleMatch = () => {
    if (selectedCargo) {
      console.log("Matching cargo:", selectedCargo);
      const result = FakeMatchService.match(selectedCargo);
      console.log("Match result:", result);
      setMatchResult(result);
    }
  };

  return (
    <div className="page-container">
      <h1>Portwise 散货智能匹配</h1>

      <div>
        <label>选择货物：</label>
        <select
          value={selectedCargo}
          onChange={(e) => setSelectedCargo(e.target.value)}
        >
          <option value="">-- 请选择货物 --</option>
          <option value="Brazil Soybeans">Brazil Soybeans</option>
          <option value="Indonesian Coal">Indonesian Coal</option>
        </select>
        <button onClick={handleMatch}>开始匹配</button>
      </div>

      <hr />

      <h2>推荐结果</h2>
      {matchResult !== null ? (
        <MatchResultCard result={matchResult} />
      ) : (
        <p>无匹配结果</p>
      )}

      <h2>地图路径（待接入）</h2>
      <div className="map-placeholder">地图模块开发中...</div>
    </div>
  );
};

export default MatchPage;
