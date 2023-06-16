import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ url }) => {
    const videosRef = useRef([]);

    useEffect(() => {
        const videos = videosRef.current;
        const sources = videos.flatMap(video => Array.from(video.querySelectorAll("source")));
        const mp4Sources = sources.filter(source => source.type.includes("mp4"));
        const mp4Source = mp4Sources[0];

        if (mp4Source) {
            const src = mp4Source.src;
            const isYoutube = src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);

            if (isYoutube) {
                const id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi).slice(1).toString();
                const mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
                mp4Source.src = mp4url + id;
                videos.forEach(video => video.load());
            }
        }
    }, []);

    return (
        <div>
            {videosRef.current.map((video, index) => (
                <video key={index} ref={el => videosRef.current[index] = el} controls>
                    <source src={url} type="video/mp4" />
                    <source src={url} type="video/webm" />
                </video>
            ))}
        </div>
    );
};

export default VideoPlayer;
