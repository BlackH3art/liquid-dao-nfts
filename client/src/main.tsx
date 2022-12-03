import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ConnectContextProvider } from './context/ConnectContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConnectContextProvider>
      <App />
    </ConnectContextProvider>
  </React.StrictMode>
);
