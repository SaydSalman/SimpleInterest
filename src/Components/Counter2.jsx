import React, { useState } from 'react'

function Counter2() {
    const [count,setCount] = useState(0);
    const Increment = ()=>{
        setCount(count+1);
    }
    const Decrement = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <p className='text-white'>Count:{count}</p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Counter2
