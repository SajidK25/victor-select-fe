import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Main } from './_pages/Main'

let theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        //    padding: 6
      }
    },
    MuiFormHelperText: {
      root: {
        marginLeft: 12,
        color: 'rgba(0, 0, 0, 0.54)'
      }
    }
  },
  palette: {
    //  primary: teal,
    primary: blue,
    secondary: orange,
    background: {
      default: '#fafafa'
    }
  },
  breakpoints: {
    values: {
      sm: 425,
      md: 768
    }
  },
  typography: {
    body1: {
      fontWeight: 300
    },
    body2: {
      fontSize: '1em',
      fontWeight: 300,
      lineHeight: '1.2rem'
    },
    h6: {
      fontSize: 20,
      lineHeight: '1.7rem',
      letterSpacing: 0,
      fontWeight: 500
    }
  }
})

const App = ({ client }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Main />
      </Router>
    </MuiThemeProvider>
  )
}

export { App }
