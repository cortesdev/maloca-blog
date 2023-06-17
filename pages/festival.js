'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { colorMap } from '../components/__COLORMAP__';
import FollowDiv from '../components/atoms/FollowDiv';
import Navigation from '../components/molecules/Navigation';
import Parallax from '../components/organisms/Parallax';
import HorizontalGallery from '../components/molecules/HorizontalGallery';
import Footer from '../components/organisms/Footer';
import { QuemSomos } from '../components/organisms/QuemSomos';
import { Maloca } from '../components/organisms/Maloca';
import Faq from '../components/organisms/Faq';
import { Form } from '../components/molecules/Form';
import Countdown from '../components/molecules/Countdown';
import { inter, orbitron, maloca } from '../utils/fonts';
import Article from '../components/molecules/Article';
import { Featured } from '../components/molecules/Featured';
import { AboutGrid } from '../components/molecules/AboutGrid';

export default function Hello() {
    const targetDate = new Date('2023-07-01T00:00:00'); // Replace with your desired target date and time

    let lastSelectedColor = null;
    const [selectedColor, setSelectedColor] = useState(-1);
    const [selectedColorName, setSelectedColorName] = useState('');
    const [show, setShow] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const handleColorChange = (colorIndex) => {
        setSelectedColor(colorIndex);

        const selectedColor = colorMap[colorIndex]?.hex;
        if (selectedColor) {
            document.documentElement.style.setProperty('--accent', selectedColor);
            lastSelectedColor = selectedColor;
        }

        return selectedColorName
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 4900; // Adjust this threshold as needed

            if (scrollPosition > threshold) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <style jsx global>{`
        :root {
          --orbitron-font: ${orbitron.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
          --maloca-font: ${maloca.style.fontFamily};
        }
      `}</style>
        <main>
            {/* <MobileNav /> */}

            {showHeader &&
                <Navigation
                    show={show}
                    handleShow={handleShow}
                    handleColorChange={handleColorChange}
                    selectedColor={selectedColor}
                    colorMap={colorMap}
                />
            }

            {/* <FollowDiv /> */}

            <Parallax selectedColorName={selectedColorName} />

            <section className='py-[100px]'>
                <Countdown targetDate={targetDate} />
            </section>

            <Featured />

            <QuemSomos />

            <AboutGrid />

            <HorizontalGallery />

            <Maloca />

            <Article />

            <Faq />

            <Form />

            <Footer />
        </main >
    </>
    )
}
