import { Activity, User, Map, Crosshair, ShoppingCart, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onHelpClick: () => void;
}

export function Header({ activeTab, onTabChange, onHelpClick }: HeaderProps) {
  const tabs = [
    { id: 'dashboard', label: 'ダッシュボード', icon: Activity },
    { id: 'matches', label: 'マッチ履歴', icon: Activity },
    { id: 'maps', label: 'マップツール', icon: Map },
    { id: 'weapons', label: '武器統計', icon: Crosshair },
    { id: 'buy', label: 'バイ情報', icon: ShoppingCart },
    { id: 'account', label: 'アカウント', icon: User },
  ];

  return (
    <header className="bg-[#0f1923] border-b border-[#ff4655]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff4655] to-[#fd4556] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <h1 className="text-xl font-bold text-white">VALORANT Stats</h1>
          </div>

          <div className="flex items-center gap-2">
            <nav className="flex gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#ff4655] text-white'
                        : 'text-gray-400 hover:text-white hover:bg-[#1c2b3a]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
            <button
              onClick={onHelpClick}
              className="p-2 text-gray-400 hover:text-white hover:bg-[#1c2b3a] rounded-lg transition-colors"
              title="ヘルプ"
            >
              <HelpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
