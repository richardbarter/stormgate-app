import { createTheme, responsiveFontSizes } from "@mui/material";
import { indigo } from "@mui/material/colors";


// black: {
//   100: "#d1d1d3",
//   200: "#a3a3a7",
//   300: "#75757a",
//   400: "#47474e",
//   500: "#191922",
//   600: "#14141b",
//   700: "#0f0f14",
//   800: "#0a0a0e",
//   900: "#050507"
// }, 

// black: {
//   100: "#d2d2d4",
//   200: "#a5a6a8",
//   300: "#79797d",
//   400: "#4c4d51",
//   500: "#1f2026",
//   600: "#191a1e",
//   700: "#131317",
//   800: "#0c0d0f",
//   900: "#060608"
// },

// //this was old one
// black: {
//   100: "#d4d4d7",
//   200: "#aaaab0",
//   300: "#7f7f88",
//   400: "#555561",
//   500: "#2a2a39",
//   600: "#22222e",
//   700: "#191922",
//   800: "#111117",
//   900: "#08080b"
// },

export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },

  //500 is the one used for background. If need to utilize shades of this background can do so here. 
  backgroundShades: {
    100: "#d4d4d7",
    200: "#aaaab0",
    300: "#7f7f88",
    400: "#555561",
    500: "#2a2a39",
    600: "#22222e",
    700: "#191922",
    800: "#111117",
    900: "#08080b"
  },
  
  primary: {
    //orange
    100: "#fdecce",
    200: "#fbd89d",
    300: "#f9c56d",
    400: "#f7b13c",
    500: "#f59e0b",
    600: "#c47e09",
    700: "#935f07",
    800: "#623f04",
    900: "#312002"
  },
  secondary: {
    // indigo
    100: indigo[100],
    200: indigo[200],
    300: indigo[300],
    400: indigo[400],
    500: indigo[500],
    600: indigo[600],
    700: indigo[700],
    800: indigo[800],
    900: indigo[900],

  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    //this is one from example project
    //main: "#1f2026",
    //coolers generated color
    //main: "#212227",
    //this is one I original went with for background of main page.  Still undecided which one of these will use.
    main: "#2a2a39"
  },
};
//coolers palette - https://coolors.co/8693ab-bdd4e7-212227-637074-aab9cf

// #8693AB (Cool Grayish Blue)
// #BDD4E7 (Light Blue)
// #212227 (Almost Black)
// #637074 (Slate Gray)
// #AAB9CF (Soft Lavender)


export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    backgroundShades: {
      ...tokens.backgroundShades,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontSize: 12,

  },
};

// Integrating tokens and themeSettings with createTheme
const theme = createTheme({
  palette: themeSettings.palette,
  typography: themeSettings.typography,
  // You can add other Material-UI theme customizations here
});

export default responsiveFontSizes(theme);

// const theme = createTheme({
//   spacing: 8,
//   palette: {
//     primary: {
//       main: '#F59E0B'
//     },
//     background: {
//       default: '#2a2a39 ',
      
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#b3b3b3'
//     }
    
   
//   },


// });

//export default responsiveFontSizes(theme);