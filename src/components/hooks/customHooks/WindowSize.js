import React from 'react';
import useCustomHook from './useCustomHook';

export default function WindowSize() {
    const size = useCustomHook(800);

    return (
        <div className={size ? 'Small' : 'Large'}>
            <p>Window size is {size ? 'Small' : 'Large'}</p>
        </div>
    );
}
