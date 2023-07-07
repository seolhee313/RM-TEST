import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Welcome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef([]);
  const lineRef = useRef([]);

  useEffect(() => {
    const textElements = textRef.current;
    const lineElement = lineRef.current;

    gsap.set(textElements, { opacity: 0, y: -50 });
    gsap.set(lineElement, { scaleX: 0, transformOrigin: 'right' });

    const section1TL = gsap.timeline({ defaults: { ease: 'power3.out' } });

    section1TL
      .to('.img', { scale: 0, duration: 0 })
      .to('.img', { scale: 1, duration: 4 })
      .fromTo(
        lineElement,
        { scaleX: 0, transformOrigin: 'right' },
        { duration: 1, scaleX: 1 },
      )
      .fromTo(
        textElements,
        { opacity: 0, y: 20 },
        { duration: 1, opacity: 1, y: 0, stagger: 0.2 },
      );

    ScrollTrigger.create({
      animation: section1TL,
      trigger: '#section1',
      start: 'top center',
      markers: false,
    });

    gsap.fromTo(
      ['.arrow1', '.arrow2'],
      { rotation: 0 },
      {
        rotation: 25,
        scrollTrigger: {
          trigger: '#section1',
          start: 'top top',
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section id="section1">
      <div className="img" aria-hidden="true"></div>
      <div className="arrow1" aria-hidden="true"></div>
      <div className="arrow2" aria-hidden="true"></div>
      <div className="text">
        <span className="line" ref={el => (lineRef.current[0] = el)}></span>
        <ul>
          <li className="split" ref={el => (textRef.current[0] = el)}>
            WELCOME
          </li>
          <li className="split" ref={el => (textRef.current[1] = el)}>
            TO MY
          </li>
          <li className="split" ref={el => (textRef.current[2] = el)}>
            PORTFOLIO
          </li>
          <li className="split" ref={el => (textRef.current[3] = el)}>
            SITE
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
