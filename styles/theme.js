import { createTheme } from '@mui/material/styles';
import { red, indigo, green, yellow } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: indigo[500],
    //   darker: indigo[800]
    // },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
    // success: {
    //   main: green[500]
    // },
    wait: {
      main: yellow[200]
    }
  },
});

export default theme;