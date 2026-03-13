import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import Mat from './components/Mat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mat />
  </StrictMode>,
)
