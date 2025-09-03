import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter   basename={import.meta.env.DEV ? "/" : "andreas893.github.io"}>
      <App />
    </BrowserRouter>  
  </StrictMode>
)
