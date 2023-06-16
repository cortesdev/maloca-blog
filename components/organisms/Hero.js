import { useEffect, useRef } from 'react';
// import { useIsMobile } from '../../utils/useIsMobile';

const HeroSection = () => {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    // const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            // Parallax effect on the content
            // contentRef.current.style.transform = `translateY(${scrollPos * 0.4}px)`;

            // Fading effect on the video
            const videoTopPos = videoRef.current.offsetTop;
            const videoHeight = videoRef.current.offsetHeight;

            const fadeStart = videoTopPos + videoHeight * 0.25;
            const fadeEnd = videoTopPos + videoHeight * 0.75;
            const opacity = 1 - (scrollPos - fadeStart) / (fadeEnd - fadeStart);

            if (opacity >= 0 && opacity <= 1) {
                videoRef.current.style.opacity = opacity;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero-container relative h-full">
            <div className="video-container">


                <video ref={videoRef} data-testid="video-player" autoPlay muted loop className='height-[100vh] min-h-[100%] object-cover md:min-w-[100vw] md:height-auto'>
                    <source
                        src="https://cdn-user.veed.io/render/367bb3b0-a608-44cb-82d9-cde533d342ad.mp4"
                        controls="false" autoplay type="video/mp4" />
                </video>

                {/* <VideoPlayer ref={videoRef} url="vrFmndAI-iY" /> */}

                <div className="video-footer" />
            </div>

            {/* <iframe width="100%" height="816px" controls="false" autoplay src="https://rr1---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1686237057&ei=IZuBZL67MtDAkgay-K_AAg&ip=156.146.48.28&id=o-AH8vV-y1Qruswc-kJn7gFuEaODS_kqsfk5rpUi0DgehA&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=qEK7B5TRTBI-dR1uNf6Yg1kbejaBVFGEFyfMwGwB9g&vprv=1&svpuc=1&mime=video%2Fwebm&ns=tmf5Ah5fJk5z-YS12-3cMcwN&gir=yes&clen=485545533&dur=1519.751&lmt=1686211691338509&keepalive=yes&fexp=24007246,24350018,24362685,24363393&beids=24350018&c=WEB&txp=5319224&n=JetQVo3sS8bfAQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgMVimzF2sv3uGuAUu9BH7KMDru7snKNnkEBQlkUv-UwYCIQC_X5Z11AxWhU4SKygrk92Mlfwkyx_AXQcirp29eMQ47g%3D%3D&redirect_counter=1&cm2rm=sn-nx5z77l&req_id=76e1fd20fcd7a3ee&cms_redirect=yes&mh=0u&mip=95.90.243.235&mm=34&mn=sn-5hne6nsk&ms=ltu&mt=1686215081&mv=m&mvi=1&pl=23&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKz4ffe1eWaSBpttNHxK-Ih7gtWqvEGFxPs7aPOhLW06AiBv4zgb7bG5b5qQOO_YTSRuW26RNaKHT3put2SDSo9Ekg%3D%3D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}



            <div className="content w-full px-3 top-[250px] md:w-[500px] md:left-[50%] md:absolute  md:right-[50%] text-center md:top-[55%] translate-50 translate-y-1/4" ref={contentRef}>
                <h1>Maloca productions</h1>
                <p>Experience the magic of YouTube Video Fade and Parallax effects.</p>
            </div>
        </div>
    );
};

export default HeroSection;
