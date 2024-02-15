import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber, blue, green, indigo, orange } from "@mui/material/colors";

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#F59E0B'
    },
    
   
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         backgroundColor: '#FAACA8',
  //         backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
  //       },
  //     },
  //   },
  // }
});

export default responsiveFontSizes(theme);