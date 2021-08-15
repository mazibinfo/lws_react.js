import React from 'react';

function Title() {
    console.log('Tittle');
    return (
        <div>
            <p>useCallback And useMemo Hook Example</p>
        </div>
    );
}

export default React.memo(Title);
