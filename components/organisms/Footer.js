import React from 'react';
import { Social } from '../molecules/Social'

const Footer = () => {
    return (
        <footer className="bg-gray-800 pt-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="block md:flex gap-6 items-center md:items-start">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
                            <ul className='flex flex-col gap-2'>
                                <li className="text-gray-400">Maloca Production</li>
                                <li className="text-gray-400">Maloca Festival</li>
                                <li className="text-gray-400">About</li>
                                <li className="text-gray-400">Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">Contate-nos</h3>
                            <ul className="text-gray-400">
                                <li>Berlin, 10439</li>
                                <li>Email: info@maløca.de</li>
                                <li>Phone: (123) 456-7890</li>
                            </ul>
                        </div>
                    </div>

                    <Social />
                </div>
            </div>
            <div className="bg-gray-900 py-2 mt-4">
                <div className="container mx-auto px-4">
                    <div className="text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Maloca. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
