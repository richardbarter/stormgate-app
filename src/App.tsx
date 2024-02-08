
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import LeaderboardPage from './features/leaderboard/LeaderboardPage';
import Layout from './layouts/Layout';
import { Box, styled } from '@mui/material';




  function App() {


    
    //from the example in docs this is needed to get the main page content in the right place. For example. the home page content should start in the top left corner of page, but also below the header, and to the right of the sidebar. Originally I just had this in the Layout component, but is also needed to position the main page elements in the correct place. 
    //while it is showing below the header, it is still not showing to the right of the sidebar...
    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));


    //drawerHeader={DrawerHeader} want to pass this to Layout if I keep this kind of structure. Currently redefining it again in Layout for use
    return (
      
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Layout />
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    
    );
  //goal is to extract the header and sidebar into their own components. 

  
  

}

export default App;


  // return (
  //   <Grid container>
  //     <Router>
  //       <Navbar />
  //       <Routes>
  //           <Route path="/" element={<HomePage />} />
  //           <Route path="/leaderboard" element={<LeaderboardPage />} />
  //         </Routes>
  //       </Router>
  //   </Grid>
  // );
  // return (
  //   <Box sx={{ display: 'flex' }}>
  //       <CssBaseline />
  //       <Layout />
  //       <HomePage />
  //   </Box>
  // );

// function App() {
//   return (
//     <Router>
//       <Layout>
        // <Routes>
        //   <Route path="/" element={<HomePage />} />
        //   <Route path="/leaderboard" element={<LeaderboardPage />} />
        // </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container, CssBaseline } from '@mui/material';
// import HomePage from './features/home/HomePage';
// import LeaderboardPage from './features/leaderboard/LeaderboardPage';
// // import { Layout } from './layouts/Layout'
// import Navbar from './layouts/Navbar';




// function App() {

//   return (
//     <Router> 
//       <CssBaseline />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/leaderboards" element={<LeaderboardPage />} />
//       </Routes>
      
//     </Router>
//   );

  // return (
  //   <Router>
      
  //     <Container>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/leaderboards" element={<LeaderboardPage />} />
  //       </Routes>
  //     </Container>
  //   </Router>
  // );
//}

//   return (
//     <Router>
//       <Layout>
//       
//         <Container>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/leaderboards" element={<LeaderboardPage />} />
//           </Routes>
//         </Container>
//       </Layout>
     
//     </Router>
//   );
// }

//export default App;