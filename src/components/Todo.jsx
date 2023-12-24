import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveTodo } from '../feature/TodoSlice'


const Todo = () => {
      
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()



  return (
    <div>
        {todos.map((todo)=> (
            <li key={todo.id}>
           {todo.text}
           <button onClick={()=> dispatch(RemoveTodo(todo.id)) } >Delete</button>
            </li>
            
        ) )}




    </div>
  )
}

export default Todo