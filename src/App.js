import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';


function calculaValorDoImposto (valorBruto) {

  console.log('Calculando valor do imposto')

  if (!valorBruto) {
    return 0
  }
  return parseFloat(valorBruto) * 0.75

}

function App() {

  const [nomeDoImposto, setNomeDoImposto] = useState('')
  const [valorBruto, setValorBruto] = useState('')

  const valorDoImposto = useMemo(() => calculaValorDoImposto(valorBruto), [valorBruto])


  return (
    <div className="App">
      <input 
        placeholder='Nome do imposto'
        value={nomeDoImposto}
        onChange={e => setNomeDoImposto(e.target.value)}
      />

      <input 
        placeholder='Valor bruto'
        value={valorBruto}
        onChange={e => setValorBruto(e.target.value)}
        type='number'
      />

    <ul>
      <li>Nome do Imposto: <strong>{nomeDoImposto}</strong></li>
      <li>Valor do Imposto: <strong>{valorDoImposto}</strong></li>
    </ul>

    </div>
  );
}

export default App;
