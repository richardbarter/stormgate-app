// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; 
//this is needed since we are expanding the primary color to include the different shades of our primary
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    teritary: PaletteColor,
    backgroundShades: PaletteColor
  }
}