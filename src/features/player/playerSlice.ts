import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//if changing player a lot, should this just use useEffect in component instead?
interface PlayerState {
  player: any[];
  matchHistory: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlayerState = {
  player: [],
  matchHistory: [],
  status: 'idle',
  error: null,
  
}

export const fetchPlayerById = createAsyncThunk(
  'player/fetchPlayer',
  async (playerId: string, { rejectWithValue}) => {
    try {
      // Fetch user data
      const playerDataResponse = await axios.get(`https://api.stormgateworld.com/v0/players/${playerId}`)
      //if i Hve the match history here, I could have pages that only need to the player data, and not also the player match history. 
      // Fetch match history
      const matchHistoryResponse = await axios.get(`https://api.stormgateworld.com/v0/players/${playerId}/matches`);

      // Combine the user data and match history in a single object
      return {
        player: playerDataResponse.data,
        matchHistory: matchHistoryResponse.data,
      };
    } catch (error) {
      //this is needed because typescript doesn't know if error has a response property or if reponse has a data property. 
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data);
      }else{
        // Handle the case where the error is not from Axios
        return rejectWithValue('An unexpected error occurred');
      }
      
    }
    // const response = await userAPI.fetchById(userId)
    // return response.data
  },
)
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPlayerById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.player = action.payload.player;
        state.matchHistory = action.payload.matchHistory
      })
      .addCase(fetchPlayerById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null;
      })
  }
});

// export const fetchPlayer = createAsyncThunk('player/fetchPlayer', async () => {
//   //need to send through id.
//   //const response = await axios.get()
// })

export default playerSlice.reducer;