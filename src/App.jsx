import { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div>
        <h1>Contador</h1>

        <p>{contador}</p>
        <button>Adicionar</button>
        <button>Diminuir</button>
        <button>Zerar</button>
    </div>
      
  )
}

export default App
