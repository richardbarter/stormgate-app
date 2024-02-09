
import { Route, Routes } from 'react-router-dom'
import HomePage from '../features/home/HomePage'
import LeaderboardPage from '../features/leaderboard/LeaderboardPage'

const RoutesMenu = () => {


    return (
       
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
        
    )

}

export default RoutesMenu

