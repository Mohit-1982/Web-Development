import { useEffect, useState } from 'react';
import Todo from './components/Todo'

const App = () => {

  const [obj, setObj] = useState(() => {
    const savedTodos = localStorage.getItem('data');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [val, setVal] = useState('');

  useEffect(() => {
      localStorage.setItem('data', JSON.stringify(obj));
  }, [obj]);

  function removeTodo(index) {
    const updatedTodos = obj.filter((_, i) => i !== index);

    setObj(updatedTodos);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (val != '') setObj(prev => [...prev, val]);
    setVal('');
  }

  return (
    <div className="flex flex-col justify-center items-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white h-screen w-full">
      <form onSubmit={handleSubmit} className="flex w-1/3">
        <input onChange={(e) => setVal(e.target.value)} value={val} className="flex-1 bg-white placeholder:text-gray-700 px-5 py-2 rounded-tl-2xl rounded-bl-2xl text-black outline-none" type="text" placeholder="Enter To-Do"/>
        <button type='submit' className="bg-white px-5 py-2 rounded-tr-2xl rounded-br-2xl border-l-2 border-l-black text-gray-600 font-semibold">Add</button>
      </form>

      <div className="flex flex-col items-center border-2 mt-7 w-1/2 h-[82vh] rounded-2xl overflow-x-auto">
        <Todo ele={obj} removeTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App