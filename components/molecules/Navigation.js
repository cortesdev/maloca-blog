/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };


    useEffect(() => {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
                setMobileNavVisible(true);
            } else {
                setIsMobile(false);
                setMobileNavVisible(false);
            }
        };

        const handleInitialResize = () => {
            handleResize();
            window.removeEventListener('resize', handleInitialResize);
        };

        window.addEventListener('resize', handleInitialResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', handleInitialResize);
        };
    }, []);


    const logo = (
        <div style={{ animation: "zoom-out 1s forwards" }} className="flex justify-center md:justify-between items-center md:flex-grow">
            <img
                className='logoAnimation'
                src="/logoMobile.png"
                alt="Logo"
            />
        </div>
    );




    // Array of navigation links
    const navLinks = [
        { label: 'FESTIVAL', href: '/festival' },
        { label: 'PRODUCTION', href: '/production' },
        { label: logo, href: '/', id: 'logo' },
        { label: 'WORKSHOPS', href: '/' },
        { label: 'JOIN', href: '/' },
    ];

    return (
        // Navigation bar container
        <nav className="backdrop-blur-md navigation fixed top-5 md:top-4 px-4 py-2 rounded-md mx-auto flex flex-col md:flex-row md:items-center bg-black/40 z-[1]   dark:bg-gray-1000/40">
            {/* Desktop navigation links */}
            <div className="hidden md:flex flex-row gap-6 text-tertiary flex-grow justify-between items-center">
                {navLinks.map((link) => (
                    <Link
                        className={`nav-item logoDesktop min-w-[70px]`}
                        key={link.label}
                        href={link.href}
                    >
                        <h3 className='text-2xl text-white'>{link.label}</h3>
                    </Link>
                ))}
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden flex items-center">
                <Link href="/"><div className="logoMobile mt-4">
                    {logo}</div>
                </Link>

                <button
                    className="text-tertiary focus:outline-none ml-auto"
                    onClick={toggleMobileNav}
                >
                    <svg
                        className="mt-3 w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile navigation links */}
            {!mobileNavOpen ? '' : (
                <ul className="bg-black/40 backdrop-blur-md z-[1] p-3 gap-6 mobile md:hidden flex flex-col gap-2 mt-4 w-full">
                    {navLinks.map((link) => (
                        link.id === "logo" ? '' :
                            <li key={link.label}>
                                <Link
                                    className="flex text-sm min-w-[70px] gap-5"
                                    id={link.id}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
