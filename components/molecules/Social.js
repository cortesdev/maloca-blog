import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

export const Social = () => {
    return (
        <div className="flex flex-col items-center md:items-end">

            <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-400 flex space-x-4">
                <li><a href="http://www.facebook.com/maloca.bln" target="_blank"><FaFacebook className="text-white text-xl" /></a></li>
                <li><a href="https://www.maløca.de" target="_blank"><SiVercel className="text-white text-xl" /></a></li>
                <li><a href="http://instagram.com/maloca.bln" target="_blank"><FaInstagram className="text-white text-xl" /></a></li>
            </ul>
            <img src="/parallax/maloca.svg" alt="" className="w-40 mt-4" />
        </div>
    )
}
