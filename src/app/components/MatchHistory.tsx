import { Calendar, MapPin, Clock } from 'lucide-react';

const mockMatches = [
  {
    id: 1,
    map: 'Bind',
    mode: 'Competitive',
    result: 'win',
    score: '13-11',
    date: '2026-05-09',
    duration: '38:24',
    agent: 'Jett',
    kills: 24,
    deaths: 18,
    assists: 6,
    combatScore: 285,
    placement: 'Match MVP',
  },
  {
    id: 2,
    map: 'Haven',
    mode: 'Competitive',
    result: 'loss',
    score: '11-13',
    date: '2026-05-09',
    duration: '42:15',
    agent: 'Reyna',
    kills: 18,
    deaths: 20,
    assists: 4,
    combatScore: 210,
    placement: 'Team MVP',
  },
  {
    id: 3,
    map: 'Ascent',
    mode: 'Competitive',
    result: 'win',
    score: '13-8',
    date: '2026-05-08',
    duration: '34:52',
    agent: 'Jett',
    kills: 21,
    deaths: 15,
    assists: 7,
    combatScore: 268,
    placement: 'Match MVP',
  },
  {
    id: 4,
    map: 'Split',
    mode: 'Competitive',
    result: 'win',
    score: '13-10',
    date: '2026-05-08',
    duration: '40:18',
    agent: 'Omen',
    kills: 19,
    deaths: 17,
    assists: 8,
    combatScore: 242,
  },
  {
    id: 5,
    map: 'Icebox',
    mode: 'Competitive',
    result: 'loss',
    score: '9-13',
    date: '2026-05-07',
    duration: '35:45',
    agent: 'Jett',
    kills: 15,
    deaths: 19,
    assists: 5,
    combatScore: 195,
  },
];

export function MatchHistory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">マッチ履歴</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#ff4655] text-white rounded-lg hover:bg-[#ff4655]/90 transition-colors">
            すべて
          </button>
          <button className="px-4 py-2 bg-[#1c2b3a] text-gray-400 rounded-lg hover:bg-[#1c2b3a]/80 transition-colors">
            勝利
          </button>
          <button className="px-4 py-2 bg-[#1c2b3a] text-gray-400 rounded-lg hover:bg-[#1c2b3a]/80 transition-colors">
            敗北
          </button>
        </div>
      </div>

      {mockMatches.map((match) => (
        <div
          key={match.id}
          className={`bg-[#1c2b3a] rounded-xl p-6 border-l-4 ${
            match.result === 'win' ? 'border-green-500' : 'border-red-500'
          } hover:bg-[#1c2b3a]/80 transition-colors cursor-pointer`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left section */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    match.result === 'win' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {match.result === 'win' ? '勝利' : '敗北'}
                </div>
                <div className="text-white font-semibold text-lg">{match.score}</div>
              </div>

              <div className="h-16 w-px bg-gray-700" />

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-lg">
                  <MapPin size={18} className="text-[#ff4655]" />
                  {match.map}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {match.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {match.duration}
                  </div>
                </div>
                <div className="text-xs text-gray-500">{match.mode}</div>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-1">エージェント</div>
                <div className="text-white font-semibold">{match.agent}</div>
              </div>

              <div className="text-center">
                <div className="text-gray-400 text-sm mb-1">K / D / A</div>
                <div className="text-white font-mono font-semibold">
                  <span className="text-green-400">{match.kills}</span>
                  {' / '}
                  <span className="text-red-400">{match.deaths}</span>
                  {' / '}
                  <span className="text-blue-400">{match.assists}</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-400 text-sm mb-1">戦闘スコア</div>
                <div className="text-white font-bold text-lg">{match.combatScore}</div>
              </div>

              {match.placement && (
                <div className="px-3 py-1 bg-[#ff4655]/20 rounded-full">
                  <span className="text-[#ff4655] text-sm font-semibold">
                    {match.placement}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
