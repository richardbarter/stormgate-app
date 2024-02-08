import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchLeaderboardData } from './leaderboardSlice';
//import { RootState } from '../../app/store';
//import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const LeaderboardPage = () => {
  const dispatch = useAppDispatch();
  //doin't need this because I have deifned the useAppSelector/dispatch from app/hooks so don't need to do state: RootState
  //const leaderboard = useAppSelector((state: RootState) => state.leaderboard);
  const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard)
  console.log('leader board from page is ', leaderboard);
  const leaderboardStatus = useAppSelector(state => state.leaderboard.status)
  const error = useAppSelector(state => state.leaderboard.error)
  

  useEffect(() => {
    if(leaderboardStatus === 'idle'){
      console.log('before dispatch');
      
      dispatch(fetchLeaderboardData());
    }
    
  }, [leaderboardStatus, dispatch]);

  let content

  if(leaderboardStatus === 'loading'){
    console.log('in loading');
    
    content = <div>loading</div>
  }else if(leaderboardStatus === 'succeeded'){
    console.log('in success');
    
    
  }else if(leaderboardStatus === 'failed'){
    console.log('in failed');
    content = <div>{error}</div>
  }

  return (
    <section className="leaderboard-list">
      <h2>Leaderboard</h2>
      {content}
    </section>
  );

  // return (
  //   <Table>
  //     <TableHead>
  //       <TableRow>
  //         <TableCell>Player Name</TableCell>
  //         <TableCell align="right">Rank</TableCell>
  //         <TableCell align="right">Wins</TableCell>
  //         <TableCell align="right">Losses</TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {leaderboard.entities.map((row: any) => (
  //         <TableRow key={row.id}>
  //           <TableCell component="th" scope="row">
  //             {row.playerName}
  //           </TableCell>
  //           <TableCell align="right">{row.rank}</TableCell>
  //           <TableCell align="right">{row.wins}</TableCell>
  //           <TableCell align="right">{row.losses}</TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // );
};

export default LeaderboardPage;
