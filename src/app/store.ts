import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from '../features/leaderboard/leaderboardSlice';

//will add player to this soon.
export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer
  },
});

//player: playerReducer

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {leaderboard: LeaderboardState, player: PlayerState}
export type AppDispatch = typeof store.dispatch;