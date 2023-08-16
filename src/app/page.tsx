import * as React from 'react';
import variables from '../styles/variables.module.scss'
import Button from '@mui/material/Button';
import Link from 'next/link';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { lightTheme, darkTheme } from '../theme'

export default function App() {
  return (
  <React.Fragment>
    <h1>color: {variables.primaryColor} </h1>
    <Link href="/contact" passHref>
      <Button variant="contained" color="secondary">Contact</Button>
    </Link>
  </React.Fragment>
  )
}
