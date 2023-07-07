import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: window });

    function animate(item) {
      gsap.to(item, {
        autoAlpha: 1,
        duration: 1.25,
        overwrite: 'auto',
        ease: 'expo',
      });
    }

    function reset(item) {
      gsap.to(item, {
        autoAlpha: 0,
        duration: 1,
        overwrite: 'auto',
        ease: 'expo',
      });
    }

    function createScrollTrigger(trigger, start, callback) {
      [...document.querySelectorAll(trigger)].forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: start,
          markers: false,
          onEnter: () => {
            callback(item);
          },
          onLeaveBack: () => {
            reset(item);
          },
        });
        gsap.set(item, { autoAlpha: 0 });
      });
    }

    createScrollTrigger('.name li', 'top 60%', animate);
    createScrollTrigger('.iam li', 'top 60%', animate);
    createScrollTrigger('.introduce ul li', 'top 70%', animate);
    createScrollTrigger('.imgText', 'top 30%', animate);
    createScrollTrigger('.imgText .text ul li', 'top 90%', animate);

    // line animation
    const section2TL = gsap.timeline();

    section2TL.fromTo(
      '#section2 .scroll .line',
      {
        scaleX: 0,
        transformOrigin: 'left',
      },
      {
        duration: 2,
        scaleX: 1,
        ease: 'power3.out',
        delay: 0.5,
      },
    );

    ScrollTrigger.create({
      trigger: '#section2',
      start: 'center center',
      animation: section2TL,
      markers: false,
    });
  }, []);

  return (
    <section id="section2">
      <div className="name">
        <ul>
          <li className="split">
            <span>CHEON</span>
          </li>
          <li className="split">
            <span>SEOL HEE</span>
          </li>
        </ul>
      </div>
      <div className="iam">
        <ul>
          <li className="split">I AM</li>
          <li className="split">FRONTEND</li>
          <li className="split">DEVELOPER</li>
        </ul>
      </div>
      <div className="introduce">
        <ul>
          <li className="split">
            저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.
          </li>
          <li className="split">
            어려움을 마주할 때도 포기하지 않고 문제에 집중하여
          </li>
          <li className="split">
            해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
          </li>
          <li className="split">
            지속적인 학습과 개인 발전을 통해 능력있는 프론트엔드 개발자로
            성장하고.
          </li>
          <li className="split">
            사용자들에게 가치 있는 웹 경험을 제공하는 것이 저의 목표입니다.
          </li>
        </ul>
      </div>
      <div className="imgText">
        <div className="img"></div>
        <div className="text">
          <ul>
            <li className="split">
              노력과 열정은 결국 좋은 결과를 가져온다고 믿습니다.
            </li>
            <li className="split">
              끊임없이 배움에 열려있으며, 겸손한 자세로 세부적인 부분까지
            </li>
            <li className="split">꼼꼼하게 살펴보는 개발자가 되겠습니다.</li>
          </ul>
        </div>
      </div>
      <div className="scroll">
        <div className="text">
          <span>SCROLL DOWN</span>
          <div className="arrow"></div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
}

export default Intro;
