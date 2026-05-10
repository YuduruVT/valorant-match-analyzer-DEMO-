import { TrendingUp, TrendingDown, Target, Crosshair, Award, Shield } from 'lucide-react';

const mockStats = {
  rank: 'Platinum 2',
  rr: 45,
  winRate: 54.3,
  kda: 1.25,
  averageScore: 215,
  headshot: 24.5,
  recentMatches: [
    { result: 'win', score: '13-11', kda: '24/18/6', agent: 'Jett' },
    { result: 'loss', score: '11-13', kda: '18/20/4', agent: 'Reyna' },
    { result: 'win', score: '13-8', kda: '21/15/7', agent: 'Jett' },
    { result: 'win', score: '13-10', kda: '19/17/8', agent: 'Omen' },
    { result: 'loss', score: '9-13', kda: '15/19/5', agent: 'Jett' },
  ],
  topAgents: [
    { name: 'Jett', matches: 45, winRate: 58 },
    { name: 'Reyna', matches: 32, winRate: 52 },
    { name: 'Omen', matches: 28, winRate: 50 },
  ],
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Rank Card */}
      <div className="bg-gradient-to-br from-[#1c2b3a] to-[#0f1923] rounded-xl p-6 border border-[#ff4655]/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{mockStats.rank}</h2>
            <p className="text-gray-400">Current Rank</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-[#ff4655]">{mockStats.rr} RR</p>
            <p className="text-gray-400 text-sm">Ranked Rating</p>
          </div>
        </div>
        <div className="w-full bg-[#0f1923] rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#ff4655] to-[#fd4556] h-2 rounded-full"
            style={{ width: `${mockStats.rr}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Award className="text-[#ff4655]" />}
          label="勝率"
          value={`${mockStats.winRate}%`}
          trend="up"
        />
        <StatCard
          icon={<Target className="text-[#ff4655]" />}
          label="平均K/D/A"
          value={mockStats.kda.toFixed(2)}
          trend="up"
        />
        <StatCard
          icon={<Crosshair className="text-[#ff4655]" />}
          label="ヘッドショット率"
          value={`${mockStats.headshot}%`}
        />
      </div>

      {/* Recent Matches */}
      <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Shield size={20} />
          最近のマッチ
        </h3>
        <div className="space-y-2">
          {mockStats.recentMatches.map((match, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                match.result === 'win' ? 'bg-green-500/10' : 'bg-red-500/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-2 h-12 rounded ${
                    match.result === 'win' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <div>
                  <p className="text-white font-semibold">{match.agent}</p>
                  <p className="text-gray-400 text-sm">{match.score}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-mono">{match.kda}</p>
                <p className="text-gray-400 text-sm">K/D/A</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Agents */}
      <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
        <h3 className="text-xl font-bold text-white mb-4">よく使うエージェント</h3>
        <div className="space-y-3">
          {mockStats.topAgents.map((agent, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff4655]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#ff4655] font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{agent.name}</p>
                  <p className="text-gray-400 text-sm">{agent.matches} マッチ</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{agent.winRate}%</p>
                <p className="text-gray-400 text-sm">勝率</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

function StatCard({ icon, label, value, trend }: StatCardProps) {
  return (
    <div className="bg-[#1c2b3a] rounded-xl p-6 border border-[#ff4655]/20">
      <div className="flex items-center justify-between mb-2">
        {icon}
        {trend && (
          trend === 'up' ? (
            <TrendingUp size={20} className="text-green-500" />
          ) : (
            <TrendingDown size={20} className="text-red-500" />
          )
        )}
      </div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
