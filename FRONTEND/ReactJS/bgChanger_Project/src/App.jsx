import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive');
  
  return (
    <>
      <div className="h-screen w-full" style={{backgroundColor: color}}>
        <button onClick={() => setColor("black")} className={`p-4 rounded-4xl bg-black text-white ml-5 mt-2`}>BLACK</button>
        <button onClick={() => setColor("blue")} className={`p-4 rounded-4xl bg-blue-900 text-white ml-5 mt-2`}>BLUE</button>
        <button onClick={() => setColor("green")} className={`p-4 rounded-4xl bg-green-900 text-white ml-5 mt-2`}>GREEN</button>
        <button onClick={() => setColor("purple")} className={`p-4 rounded-4xl bg-purple-900 text-white ml-5 mt-2`}>PURPLE</button>
        <button onClick={() => setColor("oklch(80.9% 0.105 251.813)")} className={`p-4 rounded-4xl bg-blue-300 text-white ml-5 mt-2`}>LIGHT BLUE</button>
        <button onClick={() => setColor("purple")} className={`p-4 rounded-4xl bg-purple-200 text-white ml-5 mt-2`}>LAVANDER</button>
        <button onClick={() => setColor("fuchsia")} className={`p-4 rounded-4xl bg-fuchsia-900 text-white ml-5 mt-2`}>FUCHSIA</button>
        <button onClick={() => setColor("#6a7282")} className={`p-4 rounded-4xl bg-gray-500 text-white ml-5 mt-2`}>GREY</button>
      </div>
    </>
  )
}

export default App
