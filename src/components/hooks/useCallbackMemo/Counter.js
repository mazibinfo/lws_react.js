import React from 'react';

function Counter({ count, title }) {
    console.log(`${title} ........`);
    return (
        <div>
            <p>
                {title} is {count}
            </p>
        </div>
    );
}

export default React.memo(Counter);
