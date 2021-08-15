import React from 'react';
import Clock from './Clock';

function ClockList({ number }) {
    const clockView = number.map((key) => <Clock key={key} />);
    return <div>{clockView}</div>;
}

export default ClockList;
