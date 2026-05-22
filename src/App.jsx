import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem.jsx'
import Alerta from './Alerta.jsx'
import Formulario from './Formulario.jsx'

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
        onClick={() => alert('Olá, Rodrigo!')}
      >
        Clica-me!
      </button>


      <h1 className='text-center'>Componentes e Props</h1>

      <Mensagem mytext="Bem vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />

      <Alerta tipo="success" texto="O meu novo alerta(success)" />
      <Alerta tipo="danger" texto="O meu novo alerta(danger)" />
      <Alerta tipo="warning" texto="O meu novo alerta(warning)" />

      <Formulario />
      <Tarefas />

    </div>
  );
}
export default App;