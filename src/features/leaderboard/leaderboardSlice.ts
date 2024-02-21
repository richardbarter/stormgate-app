






import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLeaderboard } from './leaderboardService';
import { LeaderboardEntry } from '../../types/types';



// Define the structure of the leaderboard data
interface LeaderboardData {
  page: number;
  count: number;
  total: number;
  entries: LeaderboardEntry[];
}

// Update the LeaderboardState interface to include the new structure
interface LeaderboardState {
  leaderboard: LeaderboardData; // Updated to match the expected data structure
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LeaderboardState = {
  leaderboard: {
    page: 0,
    count: 0,
    total: 0,
    entries: [],
  },
  status: 'idle',
  error: null,
};

// Async thunk for fetching the leaderboard
export const fetchLeaderboardData = createAsyncThunk(
  'leaderboard/fetchLeaderboard',
  async () => {
    const response = await fetchLeaderboard();
    return response;
  }
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    remove: (state, action) => {
      state.leaderboard.entries = state.leaderboard.entries.filter((r) => r.leaderboard_entry_id !== action.payload)

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaderboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaderboard = action.payload;
      })
      .addCase(fetchLeaderboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { remove } = leaderboardSlice.actions

export default leaderboardSlice.reducer;

//could put common selects in here so if need to change it is centralized.
//export const selectLeaderboard = state => state.leaderboard


