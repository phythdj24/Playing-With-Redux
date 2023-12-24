import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/TodoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const AddTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input) )
        setInput('')
    }
  return (
    <div>
        <form onSubmit={AddTodoHandler}>

            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" name="" id="" />
            
            <button>Submit</button>
        
        
        
        </form>
    </div>
  )
}

export default AddTodo