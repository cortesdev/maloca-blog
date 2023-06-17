import React, { useRef, useState } from 'react';
import { Howl } from 'howler';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';


const HowlerPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);



    // Create a new Howl instance if it doesn't exist
    if (!soundRef.current) {
        soundRef.current = new Howl({
            src: ['https://cdn.sanity.io/files/i5epcvu6/production/be02bb6fb35a32cc76faf8cd9580a04d6a54f955.mp3'], // Replace with the path to your audio file
            html5: true, // Use HTML5 audio mode
        });
    }


    // Function to toggle play/pause
    const togglePlay = () => {
        const sound = soundRef.current;
        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div className={!isPlaying && 'animate-bounce'} >
            <button
                className='styledButton'
                onClick={togglePlay}
                style={{
                    border: isPlaying ? '2px dotted' : ' solid transparent',
                    background: isPlaying ? '#97003910' : 'transparent'
                }}
            >
                {isPlaying ? <AiFillSound /> : <AiOutlineSound />}
            </button>
        </div>
    );
};

export default HowlerPlayer;
