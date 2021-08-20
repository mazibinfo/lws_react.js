import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

export default function Component1() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Counter = {count}</p>
            <button type="button" onClick={() => dispatch('increment')}>
                Increment by 1
            </button>
            <button type="button" onClick={() => dispatch('decrement')}>
                Decrement by 1
            </button>
        </div>
    );
}
