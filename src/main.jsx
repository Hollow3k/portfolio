import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Snowfall from 'react-snowfall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Snowfall color="red" zIndex={10000}/>
    <Snowfall color="green" zIndex={10000}/>
    <App />
  </StrictMode>,
)
