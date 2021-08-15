import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import Title from './Title';

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByfive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEvanOrOdd = useMemo(() => {
        let i = 0;
        // eslint-disable-next-line no-plusplus
        for (i; i < 1000000000; i++);
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div>
            <Title />
            <Counter count={count1} title="Counter 1" />
            <p>{isEvanOrOdd ? 'Evan' : 'Odd'}</p>
            <Button increment={incrementByOne}>Increment by One</Button>
            <hr />
            <Counter count={count2} title="Counter 2" />
            <Button increment={incrementByfive}>Increment by Five</Button>
        </div>
    );
}
