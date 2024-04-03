import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Scroll = () => {
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    },
  });
  }, []);

  return (
    <div className="h-[100vh] main">
      <div class="container">
        <div class="description panel blue">
          <div>
            <h1>Horizontal snapping sections (simple)</h1>
            <p>
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when
              the user stops".
            </p>
            <div class="scroll-down">
              Scroll down<div class="arrow"></div>
            </div>
          </div>
        </div>

        <section class="panel red">ONE</section>
        <section class="panel orange">TWO</section>
        <section class="panel purple">THREE</section>
        <section class="panel green">FOUR</section>
        <section class="panel gray">FIVE</section>
      </div>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            class="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
          />
        </a>
      </header>
    </div>
  );
};

export default Scroll;
