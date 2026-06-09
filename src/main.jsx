import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./context/ThemeContext.jsx"
import {SaveBookProvider} from "./context/SavedBooksContext.jsx"
import {SearchProvider} from "./context/SearchContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SaveBookProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </SaveBookProvider>
    </ThemeProvider>
  </StrictMode>,
)
