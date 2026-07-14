import { createSlice, nanoId } from '@reduxjs/toolkit'

const initialState = {
    todos: {id:nanoId(), text: 'mohit'}
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: crypto.randomUUID(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((ele) => {
                return ele.id !== action.payload.id;
            })
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) todo.text = action.payload.text;
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.action;
export default todoSlice.reducers;