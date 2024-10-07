import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageContextProvider from './contexts/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageContextProvider>
)
