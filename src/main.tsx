import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from "./routes/router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)