import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from "./routes/router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter >
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)