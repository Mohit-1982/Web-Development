import { useCallback, useEffect, useRef, useState } from "react"


const App = () => {

  const [len, setLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");
  const passRef = useRef(null);

  const passGen = useCallback(() => {

    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_={}|:<>.,/;'`?";

    for (let i = 0; i <= len; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPass(password);


  }, [len, numAllowed, charAllowed]);

  const copyPassToClipBoard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 45);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passGen();
  }, [len, numAllowed, charAllowed, passGen]);

  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center">

      <div className="h-auto w-full max-w-2xl bg-gray-700 flex items-center rounded-lg flex-col p-4">
        <h1 className="font-bold text-2xl mb-3">Password Generator</h1>
        <div className="flex w-full p-2">
          <input
          type="text"
          readOnly
          value={pass}
          ref={passRef}
          placeholder="Password"
          className="text-black text-2xl bg-white w-full py-2 px-3 rounded-tl-xl rounded-bl-xl outline-none"
          />
          <button className="bg-blue-600 text-2xl p-2 rounded-tr-xl rounded-br-xl hover:bg-blue-400 active:scale-105" onClick={copyPassToClipBoard}>COPY</button>
        </div>

        <div className="flex w-full mt-5 ml-10 items-center">
          <div className="flex items-center justify-between gap-1">
            <input 
              id="lengthInput"
              type="range"
              max={100}
              min={8}
              value={len}
              onChange={(e) => setLen(e.target.value)}
            />
            <label className="text-xl" htmlFor="lengthInput">Length : {len}</label>
          </div>

          <div className="flex gap-1 justify-center items-center text-xl">
            <input className="ml-4" id="number" type="checkbox" checked={numAllowed} onClick={() => setNumAllowed((prev) => !prev)}/>
            <label className="" htmlFor="number">Number</label>
          </div>

          <div className="flex gap-1 justify-center items-center text-lg">
            <input className="ml-4" id="char" type="checkbox" checked={charAllowed} onClick={() => setCharAllowed((prev) => !prev)}/>
            <label className="" htmlFor="char">Special Character</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App