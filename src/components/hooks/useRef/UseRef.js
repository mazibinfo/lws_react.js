import React, { useEffect, useRef, useState } from 'react';
import Input from './Input';

export default function UseRef() {
    const [date, setDate] = useState(new Date());
    const inputRef = useRef();
    const dateRef = useRef();

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        console.log(dateRef.current);
        dateRef.current = setInterval(tick, 1000);
        return () => {
            clearInterval(dateRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={() => clearInterval(dateRef.current)}>
                Clear Timer
            </button>
            <Input ref={inputRef} type="text" placeholder="Enter UserName" />
        </div>
    );
}
