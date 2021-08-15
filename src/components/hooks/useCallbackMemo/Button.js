import React from 'react';

function Button({ increment, children }) {
    console.log(`Button ${children}`);
    return (
        <div>
            <button type="button" onClick={increment}>
                {children}
            </button>
        </div>
    );
}

export default React.memo(Button);
