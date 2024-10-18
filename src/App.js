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
  const [counter, setCounter] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)


  return (
    <div className="App">
      <div>
        <input 
          placeholder='Nome do imposto'
          value={nomeDoImposto}
          onChange={e => {
            setNomeDoImposto(e.target.value)
            setCounterTwo(counterTwo+1)
          }}
          className='input-tho'
        />
      </div>
      <div>
        <input 
          placeholder='Valor bruto'
          value={valorBruto}
          onChange={e => {
            setValorBruto(e.target.value)
            setCounter(counter+1)
          }}
          className='input-tho'
          type='number'
        />
      </div>
    <ul>
      <li>Nome do Imposto: <strong>{nomeDoImposto}</strong></li>
      <li>Valor do Imposto: <strong>{valorDoImposto}</strong></li>
    </ul>
    <div>
      <span>Counter of function Calls using useMemo: {counter}</span>
    </div>
    <div>
      <span>Counter of function calls if wasn't using useMemo: {counterTwo}</span>
    </div>
    </div>
  );
}

export default App;
