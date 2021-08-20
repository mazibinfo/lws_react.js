import React, { useContext } from 'react';
import { counterContext } from './Component3';

export default function ComponentB() {
    const context = useContext(counterContext);
    return (
        <div>
            <p>Component B</p>
            <button type="button" onClick={() => context.dispatch('increment')}>
                Increment by 1
            </button>
            <button type="button" onClick={() => context.dispatch('decrement')}>
                Decrement by 1
            </button>
        </div>
    );
}
