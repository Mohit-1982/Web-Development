import { useCallback, useMemo, useState } from 'react'
import Sum from './Sum.jsx'

const App = () => {
  const [number, setNumber] = useState(1000);
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count => count + 1);

    return (<button>
      {count};
    </button>)
  }, [count]);

  const prime = useMemo(() => {
    
      let total = 0;
      if (number > 1) total++;

      for (let i = 3; i <= number; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            total++;
            break;
          }
        }
      }

      return total;

  }, [number]);

  return (
    <div className="bg-black text-white h-screen w-full">
      <h1>Number is : {number}</h1>
      <button className='border-white p-5 text-3xl' onClick={() => setNumber(number + 100)}>Increment</button>
      <h1>Prime Numbers is : {prime}</h1>
      <Sum number={number} />
      <button className='bg-white p-4 text-black' onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App