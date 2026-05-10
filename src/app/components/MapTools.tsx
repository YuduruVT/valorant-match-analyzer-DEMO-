import { Map, Award } from 'lucide-react';

interface MapToolsProps {
  onMapClick: (mapName: string) => void;
}

const mapStats = [
  {
    name: 'Bind',
    matches: 45,
    winRate: 58,
    avgScore: 225,
    bestAgent: 'Jett',
  },
  {
    name: 'Haven',
    matches: 38,
    winRate: 52,
    avgScore: 210,
    bestAgent: 'Omen',
  },
  {
    name: 'Ascent',
    matches: 42,
    winRate: 55,
    avgScore: 218,
    bestAgent: 'Reyna',
  },
  {
    name: 'Split',
    matches: 35,
    winRate: 49,
    avgScore: 205,
    bestAgent: 'Jett',
  },
  {
    name: 'Icebox',
    matches: 32,
    winRate: 47,
    avgScore: 198,
    bestAgent: 'Sage',
  },
  {
    name: 'Breeze',
    matches: 28,
    winRate: 54,
    avgScore: 212,
    bestAgent: 'Viper',
  },
];

export function MapTools({ onMapClick }: MapToolsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Map className="text-[#ff4655]" size={28} />
        <h2 className="text-2xl font-bold text-white">マップ統計</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mapStats.map((map, index) => (
          <div
            key={index}
            onClick={() => onMapClick(map.name)}
            className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20 hover:border-[#ff4655]/40 transition-all cursor-pointer"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">{map.name}</h3>
              <p className="text-gray-400 text-sm">{map.matches} マッチプレイ</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">勝率</span>
                  <span className="text-white font-semibold">{map.winRate}%</span>
                </div>
                <div className="w-full bg-[#0f1923] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      map.winRate >= 50
                        ? 'bg-gradient-to-r from-green-500 to-green-400'
                        : 'bg-gradient-to-r from-red-500 to-red-400'
                    }`}
                    style={{ width: `${map.winRate}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                <div>
                  <p className="text-gray-400 text-xs mb-1">平均スコア</p>
                  <p className="text-white font-semibold">{map.avgScore}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs mb-1">ベストエージェント</p>
                  <p className="text-[#ff4655] font-semibold">{map.bestAgent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Utilities */}
      <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20 mt-8">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Award size={20} />
          マップツール
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-[#ff4655] text-white p-4 rounded-lg hover:bg-[#ff4655]/90 transition-colors text-left">
            <h4 className="font-semibold mb-1">エージェント選択アドバイス</h4>
            <p className="text-sm text-white/80">各マップに最適なエージェントを提案</p>
          </button>
          <button className="bg-[#ff4655] text-white p-4 rounded-lg hover:bg-[#ff4655]/90 transition-colors text-left">
            <h4 className="font-semibold mb-1">戦略ガイド</h4>
            <p className="text-sm text-white/80">マップ別の攻略法とポジション</p>
          </button>
          <button className="bg-[#ff4655] text-white p-4 rounded-lg hover:bg-[#ff4655]/90 transition-colors text-left">
            <h4 className="font-semibold mb-1">ラインナップ練習</h4>
            <p className="text-sm text-white/80">スキルのラインナップ位置を確認</p>
          </button>
          <button className="bg-[#ff4655] text-white p-4 rounded-lg hover:bg-[#ff4655]/90 transition-colors text-left">
            <h4 className="font-semibold mb-1">カスタム練習</h4>
            <p className="text-sm text-white/80">マップごとのカスタム練習モード</p>
          </button>
        </div>
      </div>
    </div>
  );
}
