import { createMuiTheme } from '@material-ui/core/styles';
import { red, lightBlue } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Oxygen',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
  palette: {
    type: 'dark',
    primary: {
      main: red[500],
      dark: red[600]
    },
    secondary: {
      main: lightBlue[400],
      dark: lightBlue[600]
    },
    background: {
      paper: '#303030'
    }
  },
  overrides: {
    MuiTouchRipple: {
      root: {
        color: '#666',
      },
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
