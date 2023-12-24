import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello World"}]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        RemoveTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },

        
    }
})

export const {addTodo,RemoveTodo} = TodoSlice.actions;
export default TodoSlice.reducer;