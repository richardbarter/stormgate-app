import { TextField, Button, Box } from '@mui/material';
import React, { useState } from 'react';





const HomePage = () => {

  
  const [playerName, setPlayerName] = useState('');
  console.log('on home page');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    
    <Box component="form" sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField label="Player Name" variant="outlined" value={playerName} onChange={handleInputChange} />
      <Button variant="contained">Search</Button>
    </Box>
    
    
  );
};

export default HomePage;