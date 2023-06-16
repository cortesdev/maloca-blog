import React, { useEffect, useRef, useState } from 'react';

const MovingClouds = ({ imageSrc, speed, position }) => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let requestId;
        const containerWidth = window.innerWidth;
        const divWidth = divRef.current.offsetWidth;

        const moveDiv = () => {
            position += speed; // Adjust the speed of movement here

            if (position > containerWidth) {
                position = -divWidth;
                setIsVisible(false); // Hide the image when it reaches the right side
            } else if (position > -divWidth) {
                setIsVisible(true); // Show the image when its right side is on the left of the viewport
            }

            divRef.current.style.transform = `translateX(${position}px)`;
            requestId = requestAnimationFrame(moveDiv);
        };

        requestId = requestAnimationFrame(moveDiv);

        return () => cancelAnimationFrame(requestId);
    }, [speed, position]);

    return (
        <img
            alt="clouds"
            ref={divRef}
            className={`moving-div ${isVisible ? '' : 'hidden'}`}
            src={imageSrc}
        />
    );
};

export default MovingClouds;
