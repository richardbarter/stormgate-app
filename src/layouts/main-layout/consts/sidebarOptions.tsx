import AddHomeIcon from '@mui/icons-material/AddHome';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
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
    }
]