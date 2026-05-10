import { Link, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export function AccountLink() {
  // デモ用: 連携済みの状態をシミュレート
  const isLinked = true;
  const accountInfo = {
    gameName: 'PlayerName',
    tagLine: 'JP1',
    region: 'Asia Pacific',
    linkedDate: '2026-05-01',
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">アカウント連携</h2>
        <p className="text-gray-400">
          Riot Gamesアカウントを連携して、詳細な統計情報を確認
        </p>
      </div>

      {/* Connection Status */}
      <div
        className={`bg-gradient-to-br rounded-xl p-6 border ${
          isLinked
            ? 'from-green-500/10 to-green-600/10 border-green-500/30'
            : 'from-[#1c2b3a] to-[#0f1923] border-[#ff4655]/20'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isLinked ? (
              <CheckCircle size={48} className="text-green-500" />
            ) : (
              <AlertCircle size={48} className="text-yellow-500" />
            )}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {isLinked ? 'アカウント連携済み' : 'アカウント未連携'}
              </h3>
              {isLinked ? (
                <p className="text-green-400">
                  {accountInfo.gameName}#{accountInfo.tagLine}
                </p>
              ) : (
                <p className="text-gray-400">
                  統計情報を表示するにはアカウントを連携してください
                </p>
              )}
            </div>
          </div>
          {isLinked ? (
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              連携解除
            </button>
          ) : (
            <button className="px-6 py-3 bg-[#ff4655] text-white rounded-lg hover:bg-[#ff4655]/90 transition-colors font-semibold flex items-center gap-2">
              <Link size={20} />
              Riot アカウントで連携
            </button>
          )}
        </div>
      </div>

      {isLinked && (
        <>
          {/* Account Details */}
          <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
            <h3 className="text-lg font-bold text-white mb-4">アカウント情報</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">ゲーム名</span>
                <span className="text-white font-semibold">
                  {accountInfo.gameName}#{accountInfo.tagLine}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">リージョン</span>
                <span className="text-white font-semibold">{accountInfo.region}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400">連携日</span>
                <span className="text-white font-semibold">{accountInfo.linkedDate}</span>
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
            <h3 className="text-lg font-bold text-white mb-4">アクセス権限</h3>
            <div className="space-y-3">
              <PermissionItem
                title="マッチ履歴"
                description="過去のマッチデータの読み取り"
                granted={true}
              />
              <PermissionItem
                title="競技マッチデータ"
                description="ランクマッチの詳細情報"
                granted={true}
              />
              <PermissionItem
                title="プレイヤー統計"
                description="総合的な統計情報とパフォーマンス"
                granted={true}
              />
              <PermissionItem
                title="フレンドリスト"
                description="フレンドとのパーティー統計"
                granted={false}
              />
            </div>
          </div>

          {/* API Information */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <ExternalLink className="text-blue-400 mt-1" size={20} />
              <div>
                <h4 className="text-white font-semibold mb-2">Riot Games API について</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  このアプリケーションは Riot Games API
                  を使用してマッチデータを取得します。データは安全に処理され、第三者と共有されることはありません。
                  審査後、正式にAPIキーを取得して実装予定です。
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Privacy Notice */}
      <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
        <h3 className="text-lg font-bold text-white mb-3">プライバシーとセキュリティ</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span>データは暗号化されて安全に保存されます</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span>個人情報は第三者と共有されません</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span>いつでも連携を解除できます</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span>Riot Games の利用規約に準拠しています</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

interface PermissionItemProps {
  title: string;
  description: string;
  granted: boolean;
}

function PermissionItem({ title, description, granted }: PermissionItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-white font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          granted
            ? 'bg-green-500/20 text-green-400'
            : 'bg-gray-500/20 text-gray-400'
        }`}
      >
        {granted ? '許可済み' : '未許可'}
      </div>
    </div>
  );
}
