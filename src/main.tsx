import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import Home from './components/pages/Home/styled'
import Login from './components/pages/Login/styled'
import { GlobalStyle } from './UI/Globalstyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    {/* <Login /> */}
    <Home/>
  </React.StrictMode>
)
