/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Calculating days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Formatting the countdown string
            const countdownString = `${days} d ${hours} h ${minutes} m ${seconds} s`;
            setCountdown(countdownString);

            // Stop the countdown when reaching the target date
            if (distance <= 0) {
                clearInterval(interval);
                setCountdown('Countdown Complete!');
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);

    return (
        <div className='flex mx-auto flex-col align-center text-center orbitron relative'>
            <h2 className=' text-2xl md:text-7xl mb-20 text-center mx-auto   '>Countdown</h2>
            <p className='countdown-title text-3xl md:text-8xl fade-in h-[60px]'>{countdown}</p>

            <img src="/waves.svg" className="absolute top-3 mx-auto scale-x-1" alt="waves brand home" width="100%" height={450} />
        </div>
    );
};

export default Countdown;
