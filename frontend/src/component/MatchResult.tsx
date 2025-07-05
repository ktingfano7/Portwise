import React from "react";

interface Props {
  cargoType: string;
  shipId: string;
  etaDays: number;
  route: string[];
  lossRate: string;
  totalDistance: string;
}

const MatchResult: React.FC<Props> = ({
  cargoType,
  shipId,
  etaDays,
  route,
  lossRate,
  totalDistance,
}) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl text-white shadow-lg space-y-2">
      <h2 className="text-xl font-bold border-b border-zinc-600 pb-1 mb-2">
        匹配结果
      </h2>
      <div>
        <strong>货种：</strong> {cargoType}
      </div>
      <div>
        <strong>匹配船只：</strong> {shipId}
      </div>
      <div>
        <strong>预计送达时间：</strong> {etaDays} 天
      </div>
      <div>
        <strong>航线：</strong> {route.join(" → ")}
      </div>
      <div>
        <strong>预估空载损耗率：</strong> {lossRate}
      </div>
      <div>
        <strong>总航程：</strong> {totalDistance}
      </div>
    </div>
  );
};

export default MatchResult;
