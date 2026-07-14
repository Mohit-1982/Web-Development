import { useState } from "react";
import { useRef } from "react";


const App = () => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);

  function handleStart() {
    if (intervalIdRef.current != null) return;

    intervalIdRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000)
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset() {
    setTime(0);
    handleStop();
  }



  return (
    <div className="bg-black text-white h-screen w-full text-2xl">

      <h1>StopWatch: {time}</h1>
      <div>
        <button className=" text-black text-xl bg-white border-black p-2" onClick={handleStart}>Start</button>
        <button className=" text-black text-xl bg-white border-black p-2" onClick={handleStop}>Stop</button>
        <button className=" text-black text-xl bg-white border-black p-2" onClick={handleReset}>reset</button>
      </div>
    </div>
  )
}

export default App