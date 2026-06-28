import { useState } from 'react';

function App() {
  // let counter = 10;

  let [counter, setCounter] = useState(10);

  function addValue() {
    console.log(counter);
    if (counter < 20) setCounter(counter => counter + 1);
  }

  function removeValue() {
    console.log(counter);
    if (counter >= 1) setCounter(counter => counter - 1);
  }

  return (
    <>
      <h1>Mohit Yadav</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  )
}

export default App
