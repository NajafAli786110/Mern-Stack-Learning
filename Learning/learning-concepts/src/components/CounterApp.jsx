import React from 'react'
import { UseTaskContext } from './TaskContext'

const CounterApp = ({onCount}) => {
    const { count } = UseTaskContext();

    return (
        <>
            <p>Your Age is {count}</p>
            <button onClick={()=>onCount(+1)}>Increament</button>
            <button onClick={()=>onCount(-1)}>Decreament</button>
        </>
    )
}

export default CounterApp