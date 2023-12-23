import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
    const counter = useSelector((state) => state);
  return (
    <div>
        <h2>{counter}</h2>
    </div>
  )
}

export default Count