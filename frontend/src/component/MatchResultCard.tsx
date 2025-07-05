import { useState } from "react";
import { MatchResultCard } from "./components/MatchResultCard";

interface MatchResult {
  shipId: string;
  estimatedDays: number;
  route: string[];
  utilizationLoss: number;
  totalDistance: number;
}

function App() {
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleMatch = () => {
    // 模拟点击匹配生成结果
    const mockResult: MatchResult = {
      shipId: "Vessel-3821",
      estimatedDays: 17,
      route: ["Port of Santos", "Singapore", "Qingdao"],
      utilizationLoss: 7.5,
      totalDistance: 9800,
    };
    setResult(mockResult);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Portwise 智能匹配平台</h1>
      <button
        onClick={handleMatch}
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
      >
        开始匹配
      </button>

      <MatchResultCard result={result} />
    </div>
  );
}

export default App;
