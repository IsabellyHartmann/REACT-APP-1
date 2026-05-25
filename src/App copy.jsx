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
    // O componente App é o componente principal da aplicação
    <div className="container mt-4">


      <Notas />

    </div>
  );
}

export default Notas;