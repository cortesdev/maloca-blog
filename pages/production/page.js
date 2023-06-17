'use client';
import Navigation from '@/components/molecules/Navigation';
import Footer from '@/components/organisms/Footer';
import { QuemSomos } from '@/components/organisms/QuemSomos';
import { Maloca } from '@/components/organisms/Maloca';
import Faq from '@/components/organisms/Faq';
import { Form } from '../../components/molecules/Form';
import Head from 'next/head';
import { inter, orbitron, maloca } from '@/app/utils/fonts';
import HeroSection from '@/components/organisms/Hero';
import ResponsiveIframe from '@/components/atoms/ResponsiveIframe';
import { fadeIn } from '../utils/variants';
import { motion } from 'framer-motion';
import { useIsMobile } from '../utils/useIsMobile';

export default function Production() {
    const isMobile = useIsMobile();

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* <style jsx global>{`
            :root {
            --orbitron-font: ${orbitron.style.fontFamily};
            --inter-font: ${inter.style.fontFamily};
            --maloca-font: ${maloca.style.fontFamily};
            }
      `}</style> */}
        <main>
            {/* <FollowDiv /> */}


            <HeroSection />

            <Navigation />

            <QuemSomos />

            <Maloca />
            {/* 
            <ResponsiveIframe width="100%" height="900px" src="https://musik-mintr.netlify.app" /> */}

            <Faq />

            <Form />

            <Footer />
        </main >
    </>
    )
}
