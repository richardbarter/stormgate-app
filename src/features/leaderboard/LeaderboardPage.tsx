import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchLeaderboardData } from './leaderboardSlice';
import LeaderboardTable from './components/LeaderboardTable';
import { Container, Typography } from '@mui/material';
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

  const renderContent = () => {
    switch (leaderboardStatus) {
      case 'loading':
        return <div>Loading...</div>;
      case 'failed':
        return <div>Error: {error}</div>;
      case 'succeeded':
        return <LeaderboardTable leaderboard={leaderboard} />
      default:
        return <div>Waiting for data...</div>;
    }
  };



  return (
    <section className="leaderboard-list">
      <Container>
        <Typography variant="h2" noWrap>
          Leaderboard
        </Typography>
      
        {renderContent()}
      </Container>
    </section>
  );

};

export default LeaderboardPage;
