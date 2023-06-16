/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    // const iconSend = <LoaderIcon />


    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs
            .sendForm('service_ey8th9k', 'template_b423s9h', form.current, '__ImQ6iEygEgdElci')
            .then((result) => {
                console.log(result.text);
                resetForm();
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };


    const resetForm = () => {
        form.current.reset();
    };


    return (
        <div className="bg-[#111] md:flex items-center justify-center h-full py-10 w-full justify-around" >
            <div className='flex items-center relative flex-col' >
                {/* <img src="/parallax/maloca.svg" className="mx-auto" alt="maloca brand home" width={400} height={450} /> */}
                <img src="/waves.svg" className="absolute top-[20px] mx-auto scale-x-2" alt="waves brand home" width={400} height={450} />
                <h2 className="text-4xl font-bold mb-6">Subscribe to <br /> <br /> our Newsletter</h2>
            </div>


            <form ref={form} onSubmit={sendEmail} className=' shadow-md rounded px-8 pt-6 pb-8 md:w-1/2 p-6 text-3xl ]'>
                <label className="block text-white my-6 text-sm font-bold mb-2 orbitron text-3xl" >
                    Name
                </label>
                <input type="text" name="from_name" className='text-white p-6 w-full bg-[black] border ' />
                <label className="block text-white my-6  text-sm font-bold mb-2 orbitron text-3xl" >
                    Email
                </label>
                <input type="email" name="reply_to" className='text-white p-6 w-full bg-[black] border' />
                <label className="block text-white my-6  text-sm font-bold mb-2 orbitron text-3xl" >
                    Message
                </label>
                <textarea name="message" className='p-6 w-full text-white bg-[black] border' />

                <input className="cursor-pointer shadow text-white appearance-none w-full  border rounded w-full py-2 px-3 text-black my-6  leading-tight focus:outline-none focus:shadow-outline orbitron"
                    type="submit"
                    value={isSending ? `Sending . . . ` : 'Send'}
                />
            </form>
        </div>
    );
};