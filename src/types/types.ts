export type LeaderboardEntry = {
  leaderboard_entry_id: string;
  leaderboard: string;
  player_id: string;
  anonymous: boolean; // Correct spelling
  nickname: string;
  nickname_discriminator: string;
  rank: number;
  race: string;
  league: string;
  tier: number;
  mmr: number;
  points: number;
  wins: number;
  losses: number;
  ties: number;
  matches: number;
  win_rate: number;
};