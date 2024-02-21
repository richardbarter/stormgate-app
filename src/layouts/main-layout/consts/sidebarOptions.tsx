import AddHomeIcon from '@mui/icons-material/AddHome';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';
export const sidebarOptions = [
    {
        displayName: 'Home',
        icon: <AddHomeIcon color="primary" />,
        pathTo: '/'

    },
    {
        displayName: 'Leaderboard',
        icon: <LeaderboardIcon color="primary" />,
        pathTo: '/leaderboard'
    },
    {
      displayName: 'Player Stats',
      icon: <PersonIcon color="primary" />,
      pathTo: '/player'
    }
]