import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { globalStyles } from './stitches.config.ts'
import App from './App.tsx'

globalStyles()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
