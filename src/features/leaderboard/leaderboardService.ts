import axios from 'axios';

const API_ENDPOINT = 'https://api.stormgateworld.com/v0/leaderboards/ranked_1v1';

// Function to fetch leaderboard data
export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    console.log('response is', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    throw error;
  }
};


// import axios from 'axios';

// const API_ENDPOINT = 'https://api.stormgateworld.com/v0/leaderboards/ranked_1v1';


// //get the leaderboard results
// const getLeaderboard = async () => {
//   try{
//     const response = await axios.get(API_ENDPOINT)
//     console.log('response to get leaderboard is', response.data);
//     return response.data
    
//   } catch (error) {
//     console.error('Failed to fetch leaderboard:', error);
//     throw error;
//   }
// }

// //for scalability
// const exportedObject = {
//   getLeaderboard,
// }

// export default exportedObject