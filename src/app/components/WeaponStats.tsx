import { Crosshair, Target, TrendingUp, Award } from 'lucide-react';

const weaponData = [
  {
    name: 'Vandal',
    type: 'ライフル',
    kills: 1247,
    deaths: 856,
    headshot: 28.5,
    bodyshot: 58.2,
    legshot: 13.3,
    damagePerRound: 142,
    kd: 1.46,
    accuracy: 24.8,
    preference: 'メイン',
  },
  {
    name: 'Phantom',
    type: 'ライフル',
    kills: 892,
    deaths: 654,
    headshot: 26.1,
    bodyshot: 60.5,
    legshot: 13.4,
    damagePerRound: 138,
    kd: 1.36,
    accuracy: 26.2,
    preference: 'サブ',
  },
  {
    name: 'Operator',
    type: 'スナイパー',
    kills: 445,
    deaths: 298,
    headshot: 12.4,
    bodyshot: 78.6,
    legshot: 9.0,
    damagePerRound: 95,
    kd: 1.49,
    accuracy: 42.1,
    preference: 'メイン',
  },
  {
    name: 'Sheriff',
    type: 'サイドアーム',
    kills: 312,
    deaths: 445,
    headshot: 35.6,
    bodyshot: 52.2,
    legshot: 12.2,
    damagePerRound: 68,
    kd: 0.70,
    accuracy: 18.5,
    preference: 'エコ',
  },
  {
    name: 'Spectre',
    type: 'SMG',
    kills: 278,
    deaths: 312,
    headshot: 22.3,
    bodyshot: 64.7,
    legshot: 13.0,
    damagePerRound: 85,
    kd: 0.89,
    accuracy: 21.4,
    preference: 'フォース',
  },
  {
    name: 'Marshal',
    type: 'スナイパー',
    kills: 156,
    deaths: 187,
    headshot: 18.6,
    bodyshot: 72.4,
    legshot: 9.0,
    damagePerRound: 52,
    kd: 0.83,
    accuracy: 38.2,
    preference: 'エコ',
  },
  {
    name: 'Guardian',
    type: 'ライフル',
    kills: 134,
    deaths: 142,
    headshot: 31.3,
    bodyshot: 58.2,
    legshot: 10.5,
    damagePerRound: 78,
    kd: 0.94,
    accuracy: 29.1,
    preference: 'サブ',
  },
  {
    name: 'Classic',
    type: 'サイドアーム',
    kills: 89,
    deaths: 234,
    headshot: 28.1,
    bodyshot: 60.7,
    legshot: 11.2,
    damagePerRound: 45,
    kd: 0.38,
    accuracy: 15.2,
    preference: 'ピストル',
  },
];

export function WeaponStats() {
  const totalKills = weaponData.reduce((sum, w) => sum + w.kills, 0);
  const avgHeadshot = weaponData.reduce((sum, w) => sum + w.headshot * w.kills, 0) / totalKills;
  const bestWeapon = weaponData.reduce((best, w) => (w.kd > best.kd ? w : best));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Crosshair className="text-[#ff4655]" size={28} />
        <h2 className="text-2xl font-bold text-white">武器統計</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20">
          <div className="flex items-center gap-3 mb-2">
            <Target className="text-[#ff4655]" />
            <h3 className="text-gray-400">総キル数</h3>
          </div>
          <p className="text-3xl font-bold text-white">{totalKills.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-500" />
            <h3 className="text-gray-400">平均ヘッドショット率</h3>
          </div>
          <p className="text-3xl font-bold text-white">{avgHeadshot.toFixed(1)}%</p>
        </div>

        <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20">
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-yellow-500" />
            <h3 className="text-gray-400">ベスト武器</h3>
          </div>
          <p className="text-2xl font-bold text-white">{bestWeapon.name}</p>
          <p className="text-sm text-gray-400">K/D: {bestWeapon.kd.toFixed(2)}</p>
        </div>
      </div>

      {/* Weapon List */}
      <div className="space-y-3">
        {weaponData.map((weapon, index) => (
          <div
            key={index}
            className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20 hover:border-[#ff4655]/40 transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Weapon Info */}
              <div className="flex items-center gap-4 lg:w-1/4">
                <div className="w-12 h-12 bg-[#ff4655]/20 rounded-lg flex items-center justify-center">
                  <Crosshair className="text-[#ff4655]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{weapon.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">{weapon.type}</span>
                    <span className="px-2 py-0.5 bg-[#ff4655]/20 text-[#ff4655] text-xs rounded">
                      {weapon.preference}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">K/D</p>
                  <p
                    className={`text-lg font-bold ${
                      weapon.kd >= 1 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {weapon.kd.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">キル数</p>
                  <p className="text-lg font-bold text-white">{weapon.kills}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">ヘッドショット</p>
                  <p className="text-lg font-bold text-white">{weapon.headshot}%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">命中精度</p>
                  <p className="text-lg font-bold text-white">{weapon.accuracy}%</p>
                </div>
              </div>

              {/* Hit Distribution */}
              <div className="lg:w-1/4">
                <p className="text-gray-400 text-xs mb-2">被弾部位分布</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#0f1923] rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${weapon.headshot}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">
                      {weapon.headshot}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#0f1923] rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${weapon.bodyshot}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">
                      {weapon.bodyshot}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#0f1923] rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${weapon.legshot}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">
                      {weapon.legshot}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-white font-semibold mb-3">💡 改善のヒント</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#ff4655]">•</span>
            <span>
              Vandal/Phantomのヘッドショット率を30%以上に保つことを目標にしましょう
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff4655]">•</span>
            <span>Sheriffは頭を狙う練習に最適 - エイム練習で活用しましょう</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff4655]">•</span>
            <span>Operatorの精度を上げるには、ポジショニングの見直しが重要です</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff4655]">•</span>
            <span>SMGは接近戦で有利 - 距離を詰める立ち回りを意識しましょう</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
