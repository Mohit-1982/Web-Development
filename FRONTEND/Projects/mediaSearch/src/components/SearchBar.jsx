import { useState } from "react"
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/features/searchSlice.js";


const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(input));
    setInput("");
  }

  return (
        <form onSubmit={submitHandler} className="flex justify-center items-center bg-white text-black py-6">
            <input required value={input} onChange={(e) => setInput(e.target.value)} className="h-13 p-3 border w-1/2 outline-none rounded-tl-xl rounded-bl-xl text-lg border-r-0" type="text" placeholder="Search photos, GIFs, videos - try 'cyberpunk'" />
            <button className="h-13 text-gray-200 text-lg bg-blue-600 p-3 rounded-tr-xl rounded-br-xl">Search</button>
        </form>
  )
}

export default SearchBar