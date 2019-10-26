import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'former-kit'
import skin from 'former-kit-skin-pagarme'

const App = () => (
  <ThemeProvider theme={skin}>
    Hello React!
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
