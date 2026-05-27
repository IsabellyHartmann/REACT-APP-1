import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem';
import Alerta from './Alerta';
import Contador from './Contador';
import Formulario from './Formulario';
import Tarefas from './Tarefas';
import Notas from './Notas';

function App() {
  return (
   <div className="container mt-4">
      {/* 
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
       Evento onClick em React usa camelCase e chama uma função 
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Isabelly!')}
      >
        Clica-me!
      </button>

      <Contador />

      <h1 className="text-center">Componentes e Props</h1>
       Cada componente recebe props diferentes 
      <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />

      <Alerta tipo="success" texto="O meu novo alerta!" />
      <Alerta tipo="warning" texto="O meu novo alerta!" />
      <Alerta tipo="danger" texto="O meu novo alerta!" />

      <Tarefas />
      */}
      <Notas/>
    </div>

    

  );
}

export default App;

