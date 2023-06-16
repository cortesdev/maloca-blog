/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Maloca = () => {
    return (
        <section className=" flex flex-col items-center justify-center ">
            <h2 className="text-5xl mb-10">Maloca</h2>

            <div className='container mb-10 '>
                <div className="backdrop-blur-md w-full z-[1] rounded-[20px] p-7 md:p-[60px] leading-10 text-2xl md:flex md:flex-row gap-8 h-min-content w-1/3 bg-[#ff5379]" >
                    <div className="">
                        <img className="md:max-w-1/4 mb-3 md:mb-0 h-auto md:max-w-[300px]" src="https://images.pexels.com/photos/2513611/pexels-photo-2513611.jpeg"
                            alt="images"
                        />
                    </div>

                    <div className="">
                        <p>
                            Maloca é um termo que pode ter vários significados, dependendo do contexto em que é utilizado.
                        </p>
                        <p>
                            Na cultura indígena, por exemplo, maloca é a designação dada a grandes barracas cobertas de palmeiras, que são usadas como abrigos por diversas famílias.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
