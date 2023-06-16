/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'

const images = [
    { src: '/logoMobile.png', text: 'Teletransporte' },
    { src: '/logoMobile.png', text: 'Representatividade' },
    { src: '/logoMobile.png', text: 'Ancestralidade' },
    { src: '/logoMobile.png', text: 'Pertencimento' },
]

export const AboutGrid = () => {
    return (
        <section className="pt-5">
            <div className="container mx-auto flex flex-col h-full w-full py-10  md:flex-row gap-4 items-center   justify-between w-full md:flex gap-50 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {images.map((item, index) => {
                    return (
                        <div className='flip'>
                            <div className="flip-content rounded-[50%] h-[150px] w-[150px] align-center items-center flex"
                                key={index} >
                                <div className="flip-front p-6">
                                    <img src={item.src} alt='logo' />
                                </div>

                                <div className="flip-back break-all">
                                    <small>{item.text}</small>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </section >
    )
}
