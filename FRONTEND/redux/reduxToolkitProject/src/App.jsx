import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment, incrementByValue, decrementByValue } from './features/counterSlice';

const App = () => {
  const [num, setNum] = useState(5);
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='text-white bg-black p-4' onClick={() => dispatch(increment())}>Increment</button>
      <button className='text-white bg-black p-4' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='text-white bg-black p-4' onClick={() => dispatch(incrementByValue(num))}>Increment By Value</button>
      <button className='text-white bg-black p-4' onClick={() => dispatch(decrementByValue(num))}>Decrement By Value</button>
      <input className='text-white bg-black p-4' onChange={(e) => setNum((Number)(e.target.value))} value={num} type="number" />
    </div>
  )
}

export default App