"use client";

import gsap from "gsap";
// import "./timeline.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const maskRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers: true,
        },
      }
    );

    //Progress bar animation

    gsap.to(maskRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        // markers: true,
      },
    });
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <div className="wrapper overflow-hidden hidden md:block">
        <div ref={triggerRef}>
          <h2 className="text-center pt-16 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
            TIMELINE
          </h2>
          <svg
            viewBox="0 0 900 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[10em] left-[12vw] w-[50vw] pt-6"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
              className="dark:fill-gray-500"
            />
            <mask
              id="mask0_0_1"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="900"
              height="10"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect
                className="mask dark:fill-white"
                y="-49"
                height="99"
                fill="black"
                ref={maskRef}
              />
            </g>
          </svg>
          <div className="flex relative h-[80vh] w-[300vw]" ref={sectionRef}>
            {/* Section 1 */}
            <section className="flex justify-evenly items-start gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <h3 className="text-xl font-bold">Born in Pokhara</h3>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    🌄 Born on January 28, 2005, in Nepal&apos;s tourism
                    capital.
                  </li>
                  <li>
                    🚀 Fascinated by space science and technology as a child.
                  </li>
                  <li>
                    📱 Explored gadgets, rooted devices, and tinkered with tech.
                  </li>
                  <li>
                    🎮 Got scolded a lot for gaming and experimenting with
                    devices.
                  </li>
                </ul>
              </div>
              <div className="relative w-[25rem] h-[15rem]">
                <Image
                  src="/svg/undraw_toy_car_-7-umw.svg"
                  alt="Born in Pokhara"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </section>
            {/* Section 2 */}
            <section className="flex justify-evenly items-start gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <h3 className="text-xl font-bold">
                  Completed Secondary Schooling
                </h3>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    🎓 S.E.E from Amarsingh Secondary School with GPA 3.90.
                  </li>
                  <li>🎓 +2 in Science with GPA 3.30.</li>
                  <li>
                    🔍 Developed a budding interest in tech but didn&apos;t
                    deeply pursue it yet.
                  </li>
                </ul>
              </div>
              <div className="relative w-[25rem] h-[20rem]">
                <Image
                  src="/images/Timeline/49571516_9233298-removebg-preview.png"
                  alt="Secondary Schooling"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </section>
            {/* Section 3 */}
            <section className="flex justify-evenly items-start gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <h3 className="text-xl font-bold">
                  Present: Pursuing BSc CSIT
                </h3>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    🎯 Currently studying BSc CSIT at Prithvi Narayan Campus.
                  </li>
                  <li>
                    💻 Exploring various fields of technology, with a focus on
                    web and mobile development.
                  </li>
                  <li>🌐 Passionate about building impactful applications.</li>
                </ul>
              </div>
              <div className="relative w-[25rem] h-[20rem]">
                <Image
                  src="/images/Timeline/programmer-working-isometric-style.png"
                  alt="Present"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <section style={{ backgroundColor: "lightblue" }}></section> */}
    </>
  );
};

export default Timeline;
