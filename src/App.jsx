import { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div>
        <h1>Contador</h1>

        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
        <button onClick={() => setContador(() => {contador <= 0 ? setContador(0) : setContador(contador - 1)})}>Diminuir</button> {/*definindo que meu contador ao diminuir só vai até o 0 */}
        <button onClick={() => setContador(0)}>Zerar</button>
    </div>
      
  )
}

export default App
