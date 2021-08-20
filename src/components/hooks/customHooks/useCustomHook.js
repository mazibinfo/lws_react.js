import { useEffect, useState, useCallback } from 'react';

const useCustomHook = (winSize) => {
    const [size, setSize] = useState(true);

    const checkScreenSize = useCallback(() => {
        setSize(window.innerWidth < winSize);
    }, [winSize]);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [checkScreenSize]);

    return size;
};

export default useCustomHook;
