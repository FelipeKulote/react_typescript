import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './components/pages/login'
import { GlobalStyle } from './style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Login/>
    
  </React.StrictMode>,
)
