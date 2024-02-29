
import React from 'react';
import Layout from './layouts/main-layout/Layout';
import { Box } from '@mui/material';
import { DrawerHeader } from './styles';
import RoutesMenu from './components/RoutesMenu';


//need to add eslint

  function App() {
    //`linear-gradient(${orange['600']}, ${orange['900']})`
    //#191922
    //`radial-gradient(circle, ${blueGrey[300]} 0%, ${blueGrey[900]} 100%);`


    //this background will maybe be used, but doesn't like I can put it in the theme - background default
    //background: `radial-gradient(circle, #373749 0%, #191922 100%);`
    //minHeight needed else the background color does not cover whole page. Is there a better way to do this?
    return (
      <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <RoutesMenu />
        </Box>
      </Box>

      // <Box sx={{ display: 'flex' }}>
      //   <CssBaseline />
      //   <Layout />
      //   <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'primary.main' }}>
      //     <DrawerHeader />
      //     <RoutesMenu />
      //   </Box>
      // </Box>
    );

}

export default App;
