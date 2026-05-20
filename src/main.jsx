import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Message from './Message.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('roota')).render(
  <StrictMode>
    <Header />
    <App></App>
    <Footer />
  </StrictMode>,
)


