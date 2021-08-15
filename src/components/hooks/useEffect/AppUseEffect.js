import React, { useEffect, useState } from 'react';

export default function AppUseEffect() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    const tick = () => {
        console.log('Clock');
        setTime(new Date());
    };

    useEffect(() => {
        console.log('Counter');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('interval start');
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <p>Time: {time.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={() => setCount((preState) => preState + 1)}>
                    Click {count} times
                </button>
            </p>
        </div>
    );
}
