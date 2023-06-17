/* eslint-disable @next/next/no-img-element */
import React from 'react'


const newsData = [
    { src: 'https://images.pexels.com/photos/1378866/pexels-photo-1378866.jpeg', date: '15.07.2020', name: 'Ricardo Cortes', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis suscipit soluta labore! Expedita quas.', title: 'An intriguing title ' },
    { src: 'https://images.pexels.com/photos/2513605/pexels-photo-2513605.jpeg', date: '16.07.2020', name: 'Ricardo Cortes', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis suscipit soluta labore! Expedita quas, nesciunt similique autem..', title: 'An intriguing title for an inter' },
    { src: 'https://images.pexels.com/photos/2513611/pexels-photo-2513611.jpeg', date: '17.07.2020', name: 'Ricardo Cortes', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis suscipit soluta labore! Expedita quas, nesciunt similique autem..', title: 'An intriguing title for an interesting article' }
]

const Article = () => {
    return (
        <section className="flex md:flex-col w-full flex-wrap items-center justify-center">
            <h2 className="text-5xl mb-10">News</h2>
            <div className="separator"></div>

            <div className='container md:flex gap-12 my-24 mx-auto md:px-6'>
                {newsData.map((news, index) => {
                    return (
                        <article
                            className="featured-img mb-32  flex flex-col flex-no-wrap items-stretch flex-1 backdrop-blur-md"
                            key={index}
                        >
                            <div className="circle  z-[-1] w-[150px] h-[150px]"></div>
                            <div className="circle  z-[-1] w-[100px] h-[100px]"></div>
                            <div className="cards-inner py-6 flex flex-col px-6">
                                <img src={news.src}
                                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />

                                <div className="flex-row mb-6 flex items-center ">
                                    <img src="/avatar.png" class="mr-2 h-8 rounded-full" alt="avatar" loading="lazy" />
                                    <div>
                                        <span> Published <u>{news.date}</u> by </span>
                                        <a href="#!" className="font-medium">{news.name}</a>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="min-h-[100px] block self-start b-6 text-3xl font-bold flex-none ">
                                        {news.title}
                                    </h3>
                                </div>

                                <p className='mb-5'>
                                    {news.text}
                                </p>


                                <button
                                    className="mt-auto cursor-pointer shadow text-white appearance-none w-full  border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline orbitron"
                                    type="submit"
                                >Read more</button>

                            </div>
                        </article>

                    )
                })}
            </div>
        </section>
    )
}

export default Article