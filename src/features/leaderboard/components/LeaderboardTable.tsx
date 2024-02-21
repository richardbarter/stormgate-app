import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LeaderboardEntry } from '../../../types/types';
import { Link } from 'react-router-dom';

// Define a type for the leaderboard entry
//what if api changes the response, would this then break?


//Define the props for the LeaderboardTable component
interface LeaderboardData {
  leaderboard: {
    page: number;
    count: number;
    total: number;
    entries: LeaderboardEntry[];
  };
}


//function LeaderboardTable({ leaderboard }: LeaderboardTableProps) {
const LeaderboardTable: React.FC<LeaderboardData> = ({ leaderboard }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="leaderboard table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Nickname</TableCell>
            <TableCell align="right">League</TableCell>
            <TableCell align="right">MMR</TableCell>
            <TableCell align="right">Wins</TableCell>
            <TableCell align="right">Losses</TableCell>
            <TableCell align="right">Win Rate (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard.entries.map((entry) => (
            <TableRow
              key={entry.leaderboard_entry_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {entry.rank}
              </TableCell>
              <TableCell>
                <Link to={`/player/${entry.player_id}`}>
                  {`${entry.nickname}#${entry.nickname_discriminator}`}
                </Link>
              </TableCell>
              <TableCell align="right">{entry.league}</TableCell>
              <TableCell align="right">{entry.mmr.toFixed(2)}</TableCell>
              <TableCell align="right">{entry.wins}</TableCell>
              <TableCell align="right">{entry.losses}</TableCell>
              <TableCell align="right">{entry.win_rate.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderboardTable;