import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
//import Message from './Message.jsx'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'


// O método createRoot é usado para criar a raiz da aplicação React
createRoot(document.getElementById('roota')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)


