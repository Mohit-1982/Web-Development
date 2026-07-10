import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlics'
import { useState } from 'react';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addTodo("mohit yadav")); 
        setInput("");   
    }

  return (
    <div>
        <button value={input} onClick={handleClick}>click me</button>
    </div>
  )
}

export default AddTodo