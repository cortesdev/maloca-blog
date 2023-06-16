/* eslint-disable @next/next/no-img-element */
import Countdown from "../molecules/Countdown";
import { Orbitron } from 'next/font/google'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { useState, useEffect } from "react";
import TriangleBlack from "../atoms/TriangleBlack";
import HowlerPlayer from "../atoms/HowlerPlayer";

const orbitron = Orbitron({ subsets: ['latin'] })


export const Loader = () => {
    // console.log("Loader");
    const targetDate = new Date('2023-07-01T00:00:00'); // Replace with your desired target date and time
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000); // Delay of 2 seconds before zooming in

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className={`
            flex
            z-[9999] 
            bg-[white]
            fixed 
            left-0
            right-0
            top-0
            bottom-0 
            height-[100%]
            background-[#FE6798]
            items-center
            p-[2rem 10rem]
            color-[white]        
       `}
            direction="column"
        >
            {/* <Triangle /> */}
            <TriangleBlack />

            <div className="absolute top-[0] opacity-[.4] max-w-[50%] left-[25%] right-[25%] translate-[50%, -50%]">
                <img src="/Tent.svg" alt="icon" className="" />
            </div>

            {loaded &&
                <div className='mx-auto mt-[70px] z-[10000] mix-blend-difference'>
                    <img src="/parallax/maloca.svg" className="mx-auto" alt="maloca brand home" width={400} height={450} />
                    {/* <img src="/waves.svg" className="mx-auto scale-x-1" alt="waves brand home" width={400} height={450} /> */}

                    <div className="flex flex-col mt-[40px] items-center justify-between  ">

                        <div className={`${orbitron.className} flex mx-auto mb-4`}>
                            <Countdown targetDate={targetDate} />
                        </div>

                        <div className="flex mx-auto items-center mt-[50px]">
                            <span size='16px' className="mr-[10px]">
                                Coming soon
                            </span>

                            <HowlerPlayer />
                            {/* <img src="/loader.gif" alt="sarjeta loader" width={20} height={20} style={{}} ml="16px" /> */}
                        </div>

                        <ul className="mt-10 text-gray-400 flex space-x-4 justify-center md:justify-start">
                            <li><a href="https://www.facebook.com/maloca.bln"><FaFacebook className="text-white text-xl" /></a></li>
                            <li><a href="https://www.maløca.de"><SiVercel className="text-white text-xl" /></a></li>
                            <li><a href="http://www.instagram.com/maloca.bln"><FaInstagram className="text-white text-xl" /></a></li>
                        </ul>
                    </div>
                </div>
            }
        </section>
    );
};