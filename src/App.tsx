import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { green, orange } from '@material-ui/core/colors'

import Main from './Main'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: {
      main: orange[800]
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Main />
    </ThemeProvider>
  )
}
