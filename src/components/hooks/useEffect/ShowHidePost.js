import React, { useState } from 'react';
import AppUseEffect from './AppUseEffect';

export default function ShowHidePost() {
    const [show, hide] = useState(true);
    console.log('unmount Component');
    return (
        <div>
            {show && <AppUseEffect />}
            <button type="button" onClick={() => hide((preState) => !preState)}>
                {show ? 'Hide post' : 'Show Post'}
            </button>
        </div>
    );
}
