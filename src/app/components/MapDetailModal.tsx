import { X, TrendingUp, TrendingDown, Target, Users, AlertCircle } from 'lucide-react';

interface MapDetailModalProps {
  mapName: string;
  onClose: () => void;
}

const mapDetails: Record<string, any> = {
  Bind: {
    agents: [
      { name: 'Jett', role: 'Duelist', matches: 25, winRate: 64, avgKills: 22, strengths: ['攻撃側', 'ミッドコントロール'] },
      { name: 'Brimstone', role: 'Controller', matches: 12, winRate: 58, avgKills: 15, strengths: ['防衛側', 'サイト保持'] },
      { name: 'Sage', role: 'Sentinel', matches: 8, winRate: 50, avgKills: 12, strengths: ['防衛側', 'リテイク'] },
    ],
    roleAnalysis: [
      { role: 'Duelist', winRate: 62, recommended: true, reason: 'テレポーターを活用した素早いローテーションが有効' },
      { role: 'Controller', winRate: 56, recommended: true, reason: 'フックウィンドウとロングの視界コントロールが重要' },
      { role: 'Sentinel', winRate: 48, recommended: false, reason: 'ローテーションが遅く、対応が難しい場面が多い' },
    ],
    winningPatterns: [
      { pattern: 'Aサイト早期ラッシュ', winRate: 68, description: 'ラウンド開始直後にAサイトへ5人でラッシュ' },
      { pattern: 'Bロング制圧', winRate: 61, description: 'Bロングを確保してからサイトへ侵入' },
      { pattern: 'フェイク→ローテート', winRate: 72, description: 'Aフェイクの後、テレポーターでBへ' },
    ],
    enemyPatterns: [
      { pattern: '積極的なミッド争い', frequency: 75, counterplay: 'スモークとフラッシュで視界を遮断' },
      { pattern: 'Aサイト早期スタック', frequency: 45, counterplay: 'Bサイトへの素早い切り替え' },
      { pattern: '防衛側の前詰め', frequency: 60, counterplay: 'クリアリングを丁寧に、OP警戒' },
    ],
  },
  Haven: {
    agents: [
      { name: 'Omen', role: 'Controller', matches: 20, winRate: 60, avgKills: 17, strengths: ['3サイト対応', 'スモーク展開'] },
      { name: 'Reyna', role: 'Duelist', matches: 15, winRate: 55, avgKills: 21, strengths: ['攻撃側', 'エントリー'] },
      { name: 'Cypher', role: 'Sentinel', matches: 10, winRate: 52, avgKills: 13, strengths: ['防衛側', '情報収集'] },
    ],
    roleAnalysis: [
      { role: 'Controller', winRate: 60, recommended: true, reason: '3サイトあるため、スモークの重要性が高い' },
      { role: 'Duelist', winRate: 55, recommended: true, reason: 'エントリーが必要な狭い通路が多い' },
      { role: 'Sentinel', winRate: 52, recommended: true, reason: '複数サイトの情報収集が重要' },
    ],
    winningPatterns: [
      { pattern: 'Cサイト速攻', winRate: 70, description: 'ガレージ経由で素早くCサイトへ' },
      { pattern: 'Aロング制圧', winRate: 58, description: 'Aロングを確保してサイトへ侵入' },
      { pattern: 'スプリット攻撃', winRate: 65, description: '2方向からの同時侵入' },
    ],
    enemyPatterns: [
      { pattern: 'ローテーション遅延', frequency: 70, counterplay: '速攻で数的有利を作る' },
      { pattern: 'ガレージ警戒', frequency: 80, counterplay: 'フェイクを使って注意を逸らす' },
      { pattern: 'リテイクスタイル', frequency: 55, counterplay: 'プラントポジションの工夫' },
    ],
  },
  Ascent: {
    agents: [
      { name: 'Jett', role: 'Duelist', matches: 22, winRate: 59, avgKills: 20, strengths: ['ミッドコントロール', 'OP運用'] },
      { name: 'Astra', role: 'Controller', matches: 12, winRate: 57, avgKills: 14, strengths: ['グローバルスモーク', 'サイト保持'] },
      { name: 'Killjoy', role: 'Sentinel', matches: 8, winRate: 53, avgKills: 11, strengths: ['防衛側', 'サイトロックダウン'] },
    ],
    roleAnalysis: [
      { role: 'Duelist', winRate: 59, recommended: true, reason: 'ミッドドアの制圧とOP運用が強力' },
      { role: 'Controller', winRate: 57, recommended: true, reason: 'オープンスペースが多く、スモークが必須' },
      { role: 'Sentinel', winRate: 53, recommended: true, reason: 'サイトが広く、セットアップが有効' },
    ],
    winningPatterns: [
      { pattern: 'ミッド制圧→B', winRate: 66, description: 'ミッドを取ってからBサイトへ' },
      { pattern: 'Aメイン速攻', winRate: 60, description: 'Aメインから素早くサイトへ' },
      { pattern: 'ドア開け→スプリット', winRate: 64, description: 'ミッドドアを開けて2方向攻撃' },
    ],
    enemyPatterns: [
      { pattern: 'ミッド争奪戦', frequency: 85, counterplay: 'スモークとフラッシュで有利を取る' },
      { pattern: 'OPポジション', frequency: 65, counterplay: 'スモークでラインを切る' },
      { pattern: '防衛側のミッドスタック', frequency: 50, counterplay: 'サイト直接攻撃に切り替え' },
    ],
  },
  Split: {
    agents: [
      { name: 'Raze', role: 'Duelist', matches: 18, winRate: 56, avgKills: 19, strengths: ['エリアクリア', '爆発物'] },
      { name: 'Viper', role: 'Controller', matches: 10, winRate: 54, avgKills: 13, strengths: ['ラインカット', 'ポストプラント'] },
      { name: 'Sage', role: 'Sentinel', matches: 7, winRate: 49, avgKills: 11, strengths: ['ミッド制御', 'ウォール'] },
    ],
    roleAnalysis: [
      { role: 'Duelist', winRate: 56, recommended: true, reason: '狭いエリアが多く、クリア能力が重要' },
      { role: 'Controller', winRate: 54, recommended: true, reason: 'ミッドのラインカットが試合を左右' },
      { role: 'Sentinel', winRate: 49, recommended: false, reason: 'ローテーションルートが限られる' },
    ],
    winningPatterns: [
      { pattern: 'ミッド制圧', winRate: 69, description: 'ミッドを取って両サイトに圧力' },
      { pattern: 'Bラッシュ', winRate: 63, description: 'Bメインから速攻' },
      { pattern: 'A天国確保', winRate: 58, description: 'A天国を取ってサイトへ降下' },
    ],
    enemyPatterns: [
      { pattern: 'ミッド重視配置', frequency: 80, counterplay: 'サイト直接攻撃も選択肢に' },
      { pattern: 'ラッシュ警戒', frequency: 70, counterplay: 'フェイクを混ぜて守備を崩す' },
      { pattern: 'リテイク準備', frequency: 60, counterplay: 'プラント後のポジション取り' },
    ],
  },
  Icebox: {
    agents: [
      { name: 'Sage', role: 'Sentinel', matches: 15, winRate: 51, avgKills: 12, strengths: ['高低差利用', 'ウォール'] },
      { name: 'Jett', role: 'Duelist', matches: 10, winRate: 48, avgKills: 18, strengths: ['高所取り', '機動力'] },
      { name: 'Viper', role: 'Controller', matches: 7, winRate: 45, avgKills: 13, strengths: ['サイト分断', 'ポストプラント'] },
    ],
    roleAnalysis: [
      { role: 'Sentinel', winRate: 51, recommended: true, reason: '高低差を活かしたセットアップが強力' },
      { role: 'Duelist', winRate: 48, recommended: false, reason: '高所が多く、エントリーが難しい' },
      { role: 'Controller', winRate: 45, recommended: true, reason: '縦に長いサイトをカバーする必要' },
    ],
    winningPatterns: [
      { pattern: 'A天国優位', winRate: 55, description: 'A天国を確保してプラント' },
      { pattern: 'Bチューブ速攻', winRate: 60, description: 'Bチューブから素早く侵入' },
      { pattern: 'ミッド→A', winRate: 52, description: 'ミッド経由でAサイトへ' },
    ],
    enemyPatterns: [
      { pattern: '高所ポジション', frequency: 75, counterplay: 'ドローンやスキルで確認してから進む' },
      { pattern: 'チューブ警戒', frequency: 70, counterplay: 'フラッシュとエントリー' },
      { pattern: '防衛側の分散配置', frequency: 65, counterplay: '数的有利を作って押し込む' },
    ],
  },
  Breeze: {
    agents: [
      { name: 'Viper', role: 'Controller', matches: 12, winRate: 58, avgKills: 14, strengths: ['広域スモーク', 'ポストプラント'] },
      { name: 'Jett', role: 'Duelist', matches: 10, winRate: 56, avgKills: 21, strengths: ['OP運用', '長距離戦'] },
      { name: 'Cypher', role: 'Sentinel', matches: 6, winRate: 50, avgKills: 12, strengths: ['情報収集', 'フランクカバー'] },
    ],
    roleAnalysis: [
      { role: 'Controller', winRate: 58, recommended: true, reason: 'オープンエリアが広く、スモーク必須' },
      { role: 'Duelist', winRate: 56, recommended: true, reason: '長距離戦が多く、OPが強力' },
      { role: 'Sentinel', winRate: 50, recommended: true, reason: 'フランクルートが多く情報が重要' },
    ],
    winningPatterns: [
      { pattern: 'Aケイブ制圧', winRate: 62, description: 'Aケイブを確保してサイトへ' },
      { pattern: 'Bメイン圧力', winRate: 59, description: 'Bメインから押し込み' },
      { pattern: 'ミッド優位', winRate: 65, description: 'ミッドを取って両サイトに圧力' },
    ],
    enemyPatterns: [
      { pattern: 'OPポジション', frequency: 80, counterplay: 'スモークで視界を切る' },
      { pattern: 'ロングレンジ戦', frequency: 75, counterplay: 'スモークとフラッシュで距離を詰める' },
      { pattern: 'フランク警戒薄', frequency: 55, counterplay: 'フランクルートを活用' },
    ],
  },
};

export function MapDetailModal({ mapName, onClose }: MapDetailModalProps) {
  const details = mapDetails[mapName];

  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0f1923] rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#ff4655] to-[#fd4556] p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{mapName} - 詳細分析</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Agent Performance */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users size={20} className="text-[#ff4655]" />
              エージェント別パフォーマンス
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {details.agents.map((agent: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#1c2b3a] rounded-lg p-4 border border-[#ff4655]/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-white font-bold text-lg">{agent.name}</h4>
                      <p className="text-gray-400 text-sm">{agent.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#ff4655]">{agent.winRate}%</p>
                      <p className="text-gray-400 text-xs">勝率</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">プレイ回数</span>
                      <span className="text-white font-semibold">{agent.matches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">平均キル数</span>
                      <span className="text-white font-semibold">{agent.avgKills}</span>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-400 text-xs mb-1">強み:</p>
                      <div className="flex flex-wrap gap-1">
                        {agent.strengths.map((strength: string, i: number) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#ff4655]/20 text-[#ff4655] text-xs rounded"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Role Analysis */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target size={20} className="text-[#ff4655]" />
              ロール別分析
            </h3>
            <div className="space-y-3">
              {details.roleAnalysis.map((role: any, idx: number) => (
                <div
                  key={idx}
                  className={`bg-[#1c2b3a] rounded-lg p-4 border ${
                    role.recommended ? 'border-green-500/40' : 'border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-bold">{role.role}</h4>
                        {role.recommended ? (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-semibold">
                            おすすめ
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                            要検討
                          </span>
                        )}
                        <span className="text-white font-semibold ml-auto">
                          {role.winRate}% 勝率
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{role.reason}</p>
                    </div>
                    {role.recommended ? (
                      <TrendingUp className="text-green-500" size={24} />
                    ) : (
                      <TrendingDown className="text-red-500" size={24} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Winning Patterns */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-500" />
              勝てている動き
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {details.winningPatterns.map((pattern: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg p-4 border border-green-500/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">{pattern.pattern}</h4>
                    <span className="text-green-400 font-bold text-lg">
                      {pattern.winRate}%
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{pattern.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enemy Patterns */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-yellow-500" />
              敵の動きと対策
            </h3>
            <div className="space-y-3">
              {details.enemyPatterns.map((pattern: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#1c2b3a] rounded-lg p-4 border border-yellow-500/30"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-white font-bold">{pattern.pattern}</h4>
                    <span className="text-yellow-400 text-sm whitespace-nowrap">
                      出現率: {pattern.frequency}%
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 text-sm">対策:</span>
                    <p className="text-gray-300 text-sm">{pattern.counterplay}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
