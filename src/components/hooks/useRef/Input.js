import React from 'react';

function Input({ type, placeholder }, ref) {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
            <br />
            <input type="text" placeholder="Enter Password" />
        </div>
    );
}

export default React.forwardRef(Input);
