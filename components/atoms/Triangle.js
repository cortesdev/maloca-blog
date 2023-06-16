import React, { useState, useEffect } from 'react';

const Triangle = () => {
    const [zoomed, setZoomed] = useState(false);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        setViewportSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setZoomed(true);
        }, 2000); // Delay of 2 seconds before zooming in

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fade-in triangle ${zoomed ? 'zoomed' : ''}`}
            style={{
                width: `${viewportSize.width * 1.5}px`,
                height: `${viewportSize.height * 1.1}px`,
            }}
        >
            <div className="triangle-inner" />
        </div>
    );
};

export default Triangle;
