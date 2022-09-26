import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './UI/Globalstyle'
import Router from "./routes";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router/>
  </React.StrictMode>
)
