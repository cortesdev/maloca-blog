import { useEffect, useRef } from "react";

const FollowDiv = () => {
    const myDivRef = useRef(null);


    const isTouchDevice = () => 'ontouchstart' in window;

    const move = (e) => {
        const { pageX, pageY, touches } = e;
        const x = isTouchDevice() ? touches[0].pageX : pageX;
        const y = isTouchDevice() ? touches[0].pageY : pageY;

        myDivRef.current.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
    };

    useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        };
    }, []);


    return (
        <div id="my-div" ref={myDivRef}></div>
    );
};

export default FollowDiv;
