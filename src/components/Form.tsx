import { useState } from 'react'

function Form() {
  const [event, setEvent] = useState("");
  const [count, setCount] = useState<number>(0);
  const [bottles, setBottles] = useState<number>(0);

  function handleClick() {
    let drink = 0;
  
    if (event === 'aniversario') {
      drink = 1.5;
    } else if (event === 'jantar') {
      drink = 2;
    } else if (event === 'petiscos') {
      drink = 1;
    }

      const calculatedBottles = Math.ceil(count/drink);
      setBottles(calculatedBottles);
    
  }


    return (
      <div>
        <label>
          <span>Tipo de evento:</span>
          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value='aniversario'>Aniversário/Festa</option>
            <option value='jantar'>Jantar</option>
            <option value='petiscos'>Receber amigos/Petiscos</option>
          </select>
        </label>
        
        <label>
          <span>Quantidade de pessoas:</span>
          <input
            type='number'
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
        <button onClick={handleClick}>Calcular</button>

        {
          bottles > 0 && (
            <p>Quantidade de garrafas: {bottles}</p>
          )
        }
      </div>
    )
}

export default Form;