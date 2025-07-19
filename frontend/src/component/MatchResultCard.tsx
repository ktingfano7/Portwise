import React from "react";
import type { MatchResult } from "../services/FakeMatchService";

interface Props {
  result: MatchResult;
}

const MatchResultCard: React.FC<Props> = ({ result }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl text-white shadow-lg space-y-2">
      <h2 className="text-xl font-bold border-b border-zinc-600 pb-1 mb-2">
        匹配结果
      </h2>
      <div>
        <strong>货种：</strong> {result.cargo}
      </div>
      <div>
        <strong>匹配船只：</strong> {result.shipId}
      </div>
      <div>
        <strong>预计送达时间：</strong> {result.etaDays} 天
      </div>
      <div>
        <strong>航线：</strong> {result.voyagePlan}
      </div>
    </div>
  );
};

export default MatchResultCard;
