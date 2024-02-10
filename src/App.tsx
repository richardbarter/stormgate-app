
import React from 'react';
import Layout from './layouts/main-layout/Layout';
import { Box } from '@mui/material';
import { DrawerHeader } from './styles';
import CssBaseline from '@mui/material/CssBaseline';
import RoutesMenu from './components/RoutesMenu';


  function App() {

    return (
      
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <RoutesMenu />
        </Box>
      </Box>
    );

}

export default App;
