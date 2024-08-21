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
            <section className="flex justify-evenly items-start gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <span className="anim">Born</span>
                <h1 className="anim text-[3rem] m-0 font-[2rem]">
                  Pokhara, 2005-01-28
                </h1>
                <div className="col anim flex gap-[3em]">
                  <p className="text-[.9rem] w-[50vw]">
                    Born in Pokhara on January 28, 2005, a city renowned as
                    Nepal&apos;s tourism capital and a potential tech hub, my
                    early years surrounded by natural beauty shaped my
                    perspective on life. This environment sparked my interest in
                    technology and future career path.
                  </p>
                </div>
              </div>
              <div className="relative w-[25rem] h-[15rem] flex justify-center items-center text-[#FFFFFF]">
                <Image
                  src="/svg/undraw_toy_car_-7-umw.svg"
                  alt="Cover Image"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </section>
            <section className="flex justify-evenly items-center gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <span className="anim">Completed Secondary Schooling</span>
                <h1 className="anim text-[3rem] m-0 font-[2rem]">up to 2022</h1>
                <div className="col anim flex gap-[3em]">
                  <ul className="text-[.9rem] list-disc pl-6 w-[50vw]">
                    <li>
                      S.E.E from Amarsingh Secondary School with a GPA of 3.90
                    </li>
                    <li>
                      +2 in Science from the same school with a GPA of 3.30
                    </li>
                    <li>
                      Although I had a keen interest in technology, I
                      didn&apos;t dive deep into it during this period.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative w-[25rem] h-[20rem] flex justify-center items-center text-[#FFFFFF]">
                <Image
                  src="/images/Timeline/49571516_9233298-removebg-preview.png"
                  alt="Cover Image"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </section>

            <section className="flex justify-evenly items-center gap-12 w-[100vw] px-[12vw] py-[10vw]">
              <div className="w-[58%]">
                <span className="anim">Present</span>
                <h1 className="anim text-[3rem] m-0 font-[2rem]">
                  BSc CSIT, exp.2026
                </h1>
                <div className="col anim flex gap-[3em]">
                  <ul className="text-[.9rem] list-disc pl-6 w-[50vw]">
                    <li>
                      Currently pursuing BSc CSIT at Prithvi Narayan Campus.
                    </li>
                    <li>Deeply explored various fields of technology.</li>
                    <li>
                      Currently mainly focused on web and mobile development.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative w-[25rem] h-[20rem] flex justify-center items-center text-[#FFFFFF]">
                <Image
                  src="/images/Timeline/programmer-working-isometric-style.png"
                  alt="Cover Image"
                  layout="fill"
                  objectFit="contain"
                  className=""
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
