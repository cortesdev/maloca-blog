import React, { useEffect, useState } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Check on initial render

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

// Usage

// import {useIsMobile} from 'path'

// const comp = () => {
//     const isMobile = useIsMobile();

//     return (
//         <div>
//             {isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}
//         </div>
//     );
// };

//export default comp;
