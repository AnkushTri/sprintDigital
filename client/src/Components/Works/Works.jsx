import React from 'react'

const Works = () => {
  return (
    <div>
      {/* first  row */}
      <div className="flex items-center shadow-lg py-[8rem] my-12">
        <div className="flex-1 relative my-12">
          <img
            src="images/snap-phone.png"
            alt="phone"
            className="w-[60%] mx-auto"
          />
          <img
            src="logos/snap-arrow-left.svg"
            alt="left"
            className="absolute bottom-[20%] left-[6%]"
          />
          <img
            src="logos/snap-arrow-right.svg"
            alt="right"
            className="absolute top-[20%] right-[10%]"
          />
        </div>
        <div className="flex-1 px-5">
          <h3 className="py-5 uppercase text-[#464652] text-[1.2rem]">
            NATIVE APP DEVELOPMENT
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]">
            Creating <span className="text-[var(--color-primary)]">rich</span>{" "}
            user{" "}
            <span className="text-[var(--color-primary)]">experiences</span>
          </h1>
          <p className="py-5 leading-7 text-[1.2rem]">
            The team behind Snap Fitness approached us wanting to improve member
            retention and engagement through an app that would provide members
            with an enhanced gym experience. From fitness tracking, to recipes
            and wellness articles, the app provides members with a variety of
            tools to supplement their fitness journey.
          </p>
          <a href="" className="border-b border-black text-[1.2rem]">
            Read Case study
          </a>
        </div>
      </div>

      {/* second  row */}
      <div className="flex items-center my-12 shadow-lg py-[8rem]">
        <div className="w-[50%] relative order-2 ">
          <img
            src="images/rochele.png"
            alt="phone"
            className="w-[100%] ml-[10%] aspect-[1/0.9]"
          />
          <img
            src="logos/rochele-dot-01.svg"
            alt="left"
            className="absolute top-[-8%] left-[27%]"
          />
          <img
            src="logos/rochele-dot-02.svg"
            alt="left"
            className="absolute top-[-18%] left-[37%]"
          />
          <img
            src="logos/rochele-dot-03.svg"
            alt="left"
            className="absolute top-[-20%] left-[50%]"
          />
          <img
            src="logos/rochele-dot-04.svg"
            alt="left"
            className="absolute top-[-18%] left-[65%]"
          />
          <img
            src="logos/rochele-dot-05.svg"
            alt="left"
            className="absolute top-[-8%] right-[15%]"
          />
          <img
            src="logos/rochele-arrow.svg"
            alt="right"
            className="absolute bottom-[0%] left-[15%]"
          />
        </div>
        <div className="w-[50%] px-5">
          <h3 className="py-5 uppercase text-[#464652] text-[1.2rem]">
            LEGACY MODERNISATION
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]">
            GoodBye Paper,{" "}
            <span className="text-[var(--color-primary)]">hello profit</span>
          </h1>
          <p className="px-1 py-5 leading-7 text-[1.2rem]">
            In business for over 40 years, the team at Rochele Painting
            approached us to write a new digital chapter in the history books.
            With such a longstanding legacy, a few old school processes needed a
            new coat of paint. To modernise Rochele's operations, we automated
            their whole workflow from inquiry through to invoicing.
          </p>
          <a href="" className="border-b border-black text-[1.2rem]">
            Read Case study
          </a>
        </div>
      </div>

      {/* Third row */}
      <div className="flex items-center my-12 shadow-lg py-[8rem]">
        <div className="widht[50%] relative ">
          <img
            src="images/goturf-hero-min.png"
            alt="phone"
            className="w-[100%] ml-[-20%] aspect-[3/2.5]"
          />
          <img
            src="logos/goturf-arrowtop.svg"
            alt="left"
            className="absolute top-[20%] right-[27%]"
          />
          <img
            src="logos/goturf-arrowbottom.svg"
            alt="right"
            className="absolute top-[45%] right-[26%]"
          />
        </div>
        <div className="width-[50%] px-5 ml-[-10%]">
          <h3 className="py-5 uppercase text-[#464652] text-[1.2rem]">
            INTEGRATED WEB APPLICATIONS
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]">
            Software built for
            <span className="text-[var(--color-primary)]"> purpose.</span>
          </h1>
          <p className="py-5 leading-7 text-[1.2rem]">
            We worked with GoTurf to create a comprehensive backend system to
            manage their inventory and deliveries, connecting turf farms with
            distrubutors, and distributors to customers.
          </p>
          <a href="" className="border-b border-black text-[1.2rem]">
            Read Case study
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works