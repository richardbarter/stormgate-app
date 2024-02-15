
import React from 'react';
import Layout from './layouts/main-layout/Layout';
import { Box } from '@mui/material';
import { DrawerHeader } from './styles';
import CssBaseline from '@mui/material/CssBaseline';
import RoutesMenu from './components/RoutesMenu';
import { blueGrey, grey, indigo, orange, teal } from '@mui/material/colors';


  function App() {
    //`linear-gradient(${orange['600']}, ${orange['900']})`
    //#191922
    //`radial-gradient(circle, ${blueGrey[300]} 0%, ${blueGrey[900]} 100%);`

    //minHeight needed else the background color does not cover whole page. Is there a better way to do this?
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3, background: `radial-gradient(circle, #373749 0%, #191922 100%);` }}>
          <DrawerHeader />
          <RoutesMenu />
          {/* Assuming HomePage is rendered within RoutesMenu or similarly */}
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
