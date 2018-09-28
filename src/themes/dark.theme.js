import { createMuiTheme } from '@material-ui/core/styles';
import { teal, lightBlue } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Oxygen',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700, 
  },
  palette: {
    type: 'dark',
    primary: {
      main: teal.A400,
    },
    secondary: {
      main: lightBlue[400],
      dark: lightBlue[600]
    },
  },
});

export default theme;
