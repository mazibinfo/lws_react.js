import React from 'react';
import ComponentB from './ComponentB';

export default function ComponentA() {
    return (
        <div>
            <p>Component A</p>
            <ComponentB />
        </div>
    );
}
