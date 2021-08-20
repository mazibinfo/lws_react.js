/* eslint-disable import/no-cycle */
import React, { createContext, useReducer } from 'react';
import ComponentA from './ComponentA';

export const counterContext = createContext();
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

export default function Component3() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count = {state}</p>
            <counterContext.Provider value={{ dispatch }}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}
