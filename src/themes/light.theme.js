import { createMuiTheme } from '@material-ui/core/styles';
import { teal, lightBlue } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Oxygen',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
  palette: {
    type: 'light',
    primary: {
      main: teal.A700,
    },
    secondary: {
      main: lightBlue[400],
      dark: lightBlue[600]
    },
  },
});

// set all instances of font-family to Oxygen
Object.keys(theme.typography).forEach( key => {
  if (typeof key === 'object'){
      key.fontFamily = '"Oxygen", "Helvetica", "Arial", sans-serif"'
  }
});

export default theme;
