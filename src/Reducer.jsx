import React, { useReducer } from 'react'

const Reducer = () => {

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") return state + 1
        if (action.type === "DECREMENT") return state - 1
        return state // important fallback
    }

    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrease
            </button>
        </div>
    )
}

export default Reducer