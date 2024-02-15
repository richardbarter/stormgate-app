import { TextField, Button, Box, Container } from '@mui/material';
import React, { useState } from 'react';





const HomePage = () => {

  
  const [playerName, setPlayerName] = useState('');
  console.log('on home page');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <Container>
      <Box component="form" sx={{ '& > :not(style)': { m: 1 } }}>
        <TextField label="Player Name" variant="outlined" value={playerName} onChange={handleInputChange} />
        <Button variant="contained">Search</Button>
      </Box>
    </Container>
    
  );

  //one method of applying the background color to full page is: not sure I like this though, as I would rather the parent component app make sure they all pages rendered are covered with the background color.
//   <Box component="form" sx={{ '& > :not(style)': { m: 1 }, height: '100vh' }}>
//   <TextField label="Player Name" variant="outlined" value={playerName} onChange={handleInputChange} />
//   <Button variant="contained">Search</Button>
// </Box>
};

export default HomePage;