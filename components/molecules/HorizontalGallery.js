/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef();
  const images = useRef();

  useEffect(() => {
    let imageset = gsap.utils.toArray('.skill-set');

    let to = gsap.to(imageset, {
      xPercent: () => -100 * (imageset.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (imageset.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden flex">

      <div className="overflow-hidden ">

        <div
          id="images"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0    relative h-screen"
        >
          <article
            ref={images}
            className=" skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >

            <img
              src="https://images.pexels.com/photos/2513611/pexels-photo-2513611.jpeg"
              alt="1st image"
              className="rounded-xl overflow-hidden max-w-[70vw] max-h-[60vh] m-auto"
            />
          </article>
          <section
            ref={images}
            className=" skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <img
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="rounded-xl overflow-hidden max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={images}
            className=" skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <img
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="rounded-xl overflow-hidden max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={images}
            className=" skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <img
              src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="rounded-xl overflow-hidden rounded-xl overflow-hidden max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
        </div>
      </div>
    </section>
  );
}

export default App;
