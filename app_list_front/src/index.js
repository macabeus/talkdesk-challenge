import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'former-kit'
import skin from 'former-kit-skin-pagarme'
import ApiProvider from './providers/api-providers'
import Main from './pages/main'

const App = () => (
  <ThemeProvider theme={skin}>
    <ApiProvider>
      <Main />
    </ApiProvider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
