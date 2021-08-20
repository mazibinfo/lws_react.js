/* eslint-disable consistent-return */
import React, { useReducer } from 'react';

const initialState = {
    counter1: 0,
    counter2: 5,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter1: state.counter1 + action.value,
            };
        case 'decrement':
            return {
                ...state,
                counter1: state.counter1 - action.value,
            };
        default:
            break;
    }
};

export default function Component2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Counter = {state.counter1}</p>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment by 1
            </button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement by 1
            </button>
            <p>Counter = {state.counter2}</p>
        </div>
    );
}
