import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem.jsx'
import Alerta from './Alerta.jsx'

// Um componente React é uma função que devolve JSX (JavaScript + HTML)
function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, mundo!')}
      >
        Clica-me!
      </button>
      <h1 className="text-center">Componentes e Props</h1>
      {/* Cada componente recebe props diferentes */}
      <Mensagem texto="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem texto="Os componentes permitem reutilizar código!" />
      <Alerta tipo="success" mensagem="Esta é uma mensagem de sucesso!" />
      <Alerta tipo="warning" mensagem="Esta é uma mensagem de aviso!" />
    </div>
  );
}

export default App
