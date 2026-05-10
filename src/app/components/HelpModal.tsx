import { X, HelpCircle, Target, Map, Crosshair, ShoppingCart, BarChart } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export function HelpModal({ onClose }: HelpModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0f1923] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#ff4655] to-[#fd4556] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HelpCircle size={28} />
            <h2 className="text-2xl font-bold text-white">ヘルプ</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Introduction */}
          <section className="bg-[#1c2b3a] rounded-lg p-6 border border-[#ff4655]/20">
            <h3 className="text-xl font-bold text-white mb-3">VALORANT Statsについて</h3>
            <p className="text-gray-300 leading-relaxed">
              VALORANT Statsは、あなたのVALORANTプレイデータを詳細に分析し、
              上達のヒントを提供するアプリケーションです。マッチ履歴、エージェント統計、
              マップ分析、武器パフォーマンス、バイ（購入）パターンなどを確認できます。
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">機能説明</h3>
            <div className="space-y-4">
              <FeatureItem
                icon={<BarChart className="text-[#ff4655]" />}
                title="ダッシュボード"
                description="現在のランク、勝率、K/D/A、最近のマッチ結果を一目で確認できます。よく使うエージェントのパフォーマンスも表示されます。"
              />
              <FeatureItem
                icon={<Target className="text-[#ff4655]" />}
                title="マッチ履歴"
                description="過去のマッチの詳細情報を確認できます。各マッチのスコア、使用エージェント、K/D/A、戦闘スコアなどが表示されます。"
              />
              <FeatureItem
                icon={<Map className="text-[#ff4655]" />}
                title="マップツール"
                description="各マップでのパフォーマンスを分析します。マップをクリックすると、エージェント別の詳細、ロール分析、勝てている動き、敵の動きパターンと対策が確認できます。"
              />
              <FeatureItem
                icon={<Crosshair className="text-[#ff4655]" />}
                title="武器統計"
                description="各武器のキル数、ヘッドショット率、ダメージ効率を確認できます。どの武器が得意か、どの武器を練習すべきかがわかります。"
              />
              <FeatureItem
                icon={<ShoppingCart className="text-[#ff4655]" />}
                title="バイ情報"
                description="ラウンド別の購入パターンと経済管理を分析します。エコラウンド、フォースバイ、フルバイの成功率を確認し、最適な購入判断をサポートします。"
              />
            </div>
          </section>

          {/* How to Use */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">使い方</h3>
            <div className="bg-[#1c2b3a] rounded-lg p-6 border border-[#ff4655]/20 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">1. アカウント連携</h4>
                <p className="text-gray-300 text-sm">
                  「アカウント」タブから、Riot Gamesアカウントを連携してください。
                  これにより、あなたのマッチデータが自動的に取得されます。
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">2. データの確認</h4>
                <p className="text-gray-300 text-sm">
                  各タブを切り替えて、様々な角度からあなたのパフォーマンスを分析できます。
                  グラフやチャートをクリックすると、より詳細な情報が表示されます。
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">3. 改善ポイントの発見</h4>
                <p className="text-gray-300 text-sm">
                  勝率の低いマップやエージェント、苦手な武器を特定し、
                  練習の優先順位を決めることができます。
                </p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">活用のコツ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg p-4 border border-blue-500/30">
                <h4 className="text-white font-semibold mb-2">定期的にチェック</h4>
                <p className="text-gray-300 text-sm">
                  週に1回程度、統計をチェックして成長を確認しましょう
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg p-4 border border-green-500/30">
                <h4 className="text-white font-semibold mb-2">弱点を把握</h4>
                <p className="text-gray-300 text-sm">
                  勝率の低いマップやエージェントに注目して改善
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg p-4 border border-purple-500/30">
                <h4 className="text-white font-semibold mb-2">得意を伸ばす</h4>
                <p className="text-gray-300 text-sm">
                  勝率の高いエージェントをさらに極めることも重要
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-lg p-4 border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">経済管理</h4>
                <p className="text-gray-300 text-sm">
                  バイ情報を参考に、適切な購入判断を身につける
                </p>
              </div>
            </div>
          </section>

          {/* Privacy & API */}
          <section className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-lg p-6 border border-[#ff4655]/20">
            <h3 className="text-xl font-bold text-white mb-3">プライバシーとAPI</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              このアプリケーションはRiot Games APIを使用して、あなたのマッチデータを取得します。
              データは安全に処理され、第三者と共有されることはありません。
            </p>
            <p className="text-gray-400 text-xs">
              ※ 現在はデモバージョンです。審査後、正式なAPIキーを取得して実装予定です。
            </p>
          </section>

          {/* Contact */}
          <section className="text-center">
            <p className="text-gray-400 text-sm">
              問題が発生した場合や、ご要望がある場合は
              <br />
              サポートまでお問い合わせください
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4 bg-[#1c2b3a] rounded-lg p-4 border border-[#ff4655]/20">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
