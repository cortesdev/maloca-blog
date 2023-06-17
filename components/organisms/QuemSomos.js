import React from 'react'

export const QuemSomos = () => {
    return (
        <section id="about" className="relative mx-auto w-full md:px-6 h-full md:flex">
            <div className="circleBig z-[0] w-[300px] h-[300px] left-[50%] right-[50%] mx-auto z-[0]"></div>
            <div className="flex flex-col items-center mx-auto text-center md:items-start max-w-2/3">
                <h2 className="text-7xl my-10 text-center mx-auto z-[1]">What is Maloca?</h2>
                {/* <img src="/waves.svg" className="top-2 max-w-[200px] scale-x-1" alt="waves brand home" width="100%" height={450} /> */}

                <article className='container'>
                    <div className="separator"></div>
                    <br />
                    {/* <p className="leading-10 text-2xl" >

                    We are a production company and we organize festivals and collaborative events with the purpose of adding and bringing local and external musical news.
                </p>
                <p className="leading-10 text-2xl mt-4" >

                    In addition, we offer various services such as photography, videography, social media, web development, event organization.
                </p> */}

                    <p className="mt-[130px] leading-10 text-2xl">
                        {`We're`} a Maloca, a production company that is
                        dedicated to organizing live Latin music concerts,
                        festivals and overall collaborative events.

                    </p>

                    <p className="leading-10 text-2xl mt-6">
                        with a focus on showcasing local migrant music and international musical talent.              </p>
                </article>
            </div>
        </section>
    )
}
