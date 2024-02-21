
import { Route, Routes } from 'react-router-dom'
import HomePage from '../features/home/HomePage'
import LeaderboardPage from '../features/leaderboard/LeaderboardPage'
import PlayerPage from '../features/player/PlayerPage'

const RoutesMenu = () => {


    return (
       
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
            <Route path="/player" element={<PlayerPage />} />
        </Routes>
        
    )

}

export default RoutesMenu

