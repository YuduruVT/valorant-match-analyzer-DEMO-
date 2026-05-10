import { ShoppingCart, TrendingUp, TrendingDown, DollarSign, AlertCircle } from 'lucide-react';

const buyPatterns = [
  {
    round: 'ピストルラウンド',
    avgSpend: 800,
    winRate: 52,
    mostCommon: 'Classic + アビリティ',
    recommendation: 'アビリティへの投資を優先',
  },
  {
    round: '第2ラウンド（勝利後）',
    avgSpend: 2850,
    winRate: 64,
    mostCommon: 'Spectre + Light Shield',
    recommendation: '現在の戦略が効果的',
  },
  {
    round: '第2ラウンド（敗北後）',
    avgSpend: 950,
    winRate: 38,
    mostCommon: 'Sheriff + アビリティ',
    recommendation: 'セーブして第3ラウンドに備える',
  },
  {
    round: 'エコラウンド',
    avgSpend: 1200,
    winRate: 28,
    mostCommon: 'Classic + Full アビリティ',
    recommendation: '適切なセーブ判断',
  },
  {
    round: 'フォースバイ',
    avgSpend: 3200,
    winRate: 42,
    mostCommon: 'Bulldog + Light Shield',
    recommendation: 'リスクとリターンのバランスを見直し',
  },
  {
    round: 'フルバイ',
    avgSpend: 5400,
    winRate: 58,
    mostCommon: 'Vandal + Heavy Shield',
    recommendation: '武器選択は良好',
  },
];

const economyStats = {
  avgCreditsPerRound: 3850,
  ecoRoundFrequency: 24,
  fullBuyFrequency: 42,
  forcebuyFrequency: 18,
  saveFrequency: 16,
};

const weaponEconomy = [
  { weapon: 'Vandal', cost: 2900, pickRate: 35, winRate: 56 },
  { weapon: 'Phantom', cost: 2900, pickRate: 28, winRate: 54 },
  { weapon: 'Operator', cost: 4700, pickRate: 12, winRate: 48 },
  { weapon: 'Spectre', cost: 1600, pickRate: 15, winRate: 45 },
  { weapon: 'Sheriff', cost: 800, pickRate: 8, winRate: 32 },
  { weapon: 'Marshal', cost: 950, pickRate: 2, winRate: 38 },
];

export function BuyStats() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingCart className="text-[#ff4655]" size={28} />
        <h2 className="text-2xl font-bold text-white">バイ（購入）情報</h2>
      </div>

      {/* Economy Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#1c2b3a] rounded-xl p-4 border border-[#ff4655]/20">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={18} className="text-[#ff4655]" />
            <h3 className="text-gray-400 text-sm">平均所持金</h3>
          </div>
          <p className="text-2xl font-bold text-white">
            {economyStats.avgCreditsPerRound}
          </p>
          <p className="text-xs text-gray-400 mt-1">クレジット/ラウンド</p>
        </div>

        <div className="bg-[#1c2b3a] rounded-xl p-4 border border-[#ff4655]/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-green-500" />
            <h3 className="text-gray-400 text-sm">フルバイ</h3>
          </div>
          <p className="text-2xl font-bold text-white">
            {economyStats.fullBuyFrequency}%
          </p>
          <p className="text-xs text-gray-400 mt-1">全ラウンド中</p>
        </div>

        <div className="bg-[#1c2b3a] rounded-xl p-4 border border-[#ff4655]/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown size={18} className="text-yellow-500" />
            <h3 className="text-gray-400 text-sm">エコラウンド</h3>
          </div>
          <p className="text-2xl font-bold text-white">
            {economyStats.ecoRoundFrequency}%
          </p>
          <p className="text-xs text-gray-400 mt-1">全ラウンド中</p>
        </div>

        <div className="bg-[#1c2b3a] rounded-xl p-4 border border-[#ff4655]/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={18} className="text-orange-500" />
            <h3 className="text-gray-400 text-sm">フォースバイ</h3>
          </div>
          <p className="text-2xl font-bold text-white">
            {economyStats.forcebuyFrequency}%
          </p>
          <p className="text-xs text-gray-400 mt-1">全ラウンド中</p>
        </div>
      </div>

      {/* Buy Patterns */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">ラウンド別購入パターン</h3>
        <div className="space-y-3">
          {buyPatterns.map((pattern, index) => (
            <div
              key={index}
              className="bg-[#1c2b3a] rounded-xl p-5 border border-[#ff4655]/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">{pattern.round}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">平均支出:</span>
                      <span className="text-white font-semibold ml-2">
                        {pattern.avgSpend} c
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">勝率:</span>
                      <span
                        className={`font-semibold ml-2 ${
                          pattern.winRate >= 50 ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {pattern.winRate}%
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">よく買う:</span>
                      <span className="text-white font-semibold ml-2">
                        {pattern.mostCommon}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-3 border border-blue-500/30">
                    <p className="text-xs text-gray-400 mb-1">💡 推奨</p>
                    <p className="text-sm text-white">{pattern.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weapon Economy */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">武器別経済効率</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weaponEconomy.map((weapon, index) => (
            <div
              key={index}
              className="bg-[#1c2b3a] rounded-xl p-4 border border-[#ff4655]/20"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{weapon.weapon}</h4>
                <span className="text-[#ff4655] font-semibold">{weapon.cost}c</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">選択率</span>
                    <span className="text-white">{weapon.pickRate}%</span>
                  </div>
                  <div className="w-full bg-[#0f1923] rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${weapon.pickRate}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">勝率</span>
                    <span
                      className={weapon.winRate >= 50 ? 'text-green-400' : 'text-red-400'}
                    >
                      {weapon.winRate}%
                    </span>
                  </div>
                  <div className="w-full bg-[#0f1923] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        weapon.winRate >= 50 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${weapon.winRate}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Economy Tips */}
      <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="text-yellow-500" />
          経済管理のコツ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
            <h4 className="text-green-400 font-semibold mb-2">✓ 良い習慣</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• チーム全体でバイのタイミングを合わせる</li>
              <li>• 次ラウンドのことも考えて購入する</li>
              <li>• 連敗時は思い切ってセーブする</li>
              <li>• フルバイ時はアーマーを必ず購入</li>
            </ul>
          </div>
          <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
            <h4 className="text-red-400 font-semibold mb-2">✗ 避けるべき行動</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• 一人だけフルバイ・一人だけエコ</li>
              <li>• 中途半端なフォースバイ</li>
              <li>• 次ラウンドの資金を考えない購入</li>
              <li>• アーマーなしでライフルを購入</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
