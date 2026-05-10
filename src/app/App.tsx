import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MatchHistory } from './components/MatchHistory';
import { MapTools } from './components/MapTools';
import { WeaponStats } from './components/WeaponStats';
import { BuyStats } from './components/BuyStats';
import { AccountLink } from './components/AccountLink';
import { MapDetailModal } from './components/MapDetailModal';
import { HelpModal } from './components/HelpModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1923]">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onHelpClick={() => setShowHelp(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'matches' && <MatchHistory />}
        {activeTab === 'maps' && <MapTools onMapClick={setSelectedMap} />}
        {activeTab === 'weapons' && <WeaponStats />}
        {activeTab === 'buy' && <BuyStats />}
        {activeTab === 'account' && <AccountLink />}
      </main>

      {selectedMap && (
        <MapDetailModal mapName={selectedMap} onClose={() => setSelectedMap(null)} />
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}