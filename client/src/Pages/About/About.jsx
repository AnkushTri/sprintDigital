// import Scroll from "../../Components/Scroll/Scroll";
import React from "react";
import "./About.css";
import ScrollingContact from "../../Components/ScrollingContact/ScrollingContact";

const About = () => {
  const values = [
    {
      img: "images/innovation.png",
      title: "Innovation",
      description:
        "We value creative thinking to generate thoughtful solutions for complex problems.",
    },
    {
      img: "images/adaptation.png",
      title: "Adaption",
      description:
        "We strive to overcome roadblocks efficiently to help you reach your business goals.t",
    },
    {
      img: "images/collaboration.png",
      title: "Collaboration",
      description:
        "When you partner with us, we become part of your team and share your vision.",
    },
  ];

  return (
    <div className="">
      <div className="w-[50%] px-[3%] pt-[10%] xsm:w-[100%]">
        <h3 className="text-[#46465294] text-[1.3rem] uppercase font-bold">
          About Us
        </h3>
        <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
          <span className="text-[var(--color-primary)]">
            Chandigarh leaders{" "}
          </span>
          in custom software development
        </h1>
        <p className="py-5 leading-7 text-[1.2rem]">
          We are an India-based software agency that designs and develops
          digital products for the people that use them. Our strength lies in
          our talented team and our capability to develop end-to-end business
          process solutions in-house.
        </p>
      </div>
      {/* <div><Scroll /></div> */}
      {/* what we do */}
      <div className="flex px-[3%] gap-10 py-[8rem] xsm:flex-col gap-0 pb-0">
        <div className="title  w-[50%] xsm:w-full">
          <h3 className=" text-[#464652] text-[1.2rem] uppercase">
            What We do
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
            Here at Sprint, we{" "}
            <span className="text-[var(--color-primary)]"> create change</span>
          </h1>
        </div>
        <div className="w-[50%] xsm:w-full">
          <p className="my-5 leading-7 text-[1.2rem]">
            We work with clients from a range of industries, and have spent the
            past decade perfecting our craft. Our goal is to make digital
            products that are a joy to use, and we measure our success by the
            impact that our products have on our clients' businesses.
          </p>
          <p className="my-1 leading-7 text-[1.2rem]">
            We’re here to help you create change. If you’re looking for a
            talented team of designers and software engineers who can help you
            turn your vision into reality, then we'd love to hear from you.
          </p>
          <div className=" border rounded-3xl w-[30%]  text-white my-5 bg-[var(--color-primary)]">
            <button type="button" className="py-3 px-4 w-[100%] mx-auto">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* OUr core values */}
      <div className="px-[3%] gap-10 py-[8rem] xsm:px-[5%]">
        <div className="title  w-[50%] xsm:w-[100%]">
          <h3 className=" text-[#66666e] text-[1.2rem] uppercase">
            Our core values
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
            Our fuel to{" "}
            <span className="text-[var(--color-primary)]">
              {" "}
              go the distance
            </span>
          </h1>
        </div>
        <div className="flex justify-between my-12 xsm:flex-col my-0">
          {values.map((el, index) => {
            return (
              <div key={index} className="w-[30%] xsm:w-full">
                <img src={el.img} alt="value" className="my-5" />
                <h2 className="text-[1.5rem] my-5 font-black">{el.title}</h2>
                <p className="my-5 text-[1.2rem]">{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How we do it */}
      <div className="flex px-[3%] gap-10 py-[8rem] bg-[#eae8e8] xsm:py-[5%] flex-col">
        <div className="title  w-[50%] xsm:w-[100%]">
          <h3 className=" text-[#464652] text-[1.2rem] uppercase">
            how we do it
          </h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
            Agility that keeps us{" "}
            <span className="text-[var(--color-primary)]"> moving forward</span>
          </h1>
          <p className="my-1 leading-7 text-[1.2rem]">
            At Sprint we are committed to delivering results. Using our Agile
            workflow, we collaborate with you to iterate on and refine your
            product as it takes shape.
          </p>
        </div>
      </div>

      {/* contact us */}

      {/* infinte text */}
      <ScrollingContact />
    </div>
  );
};

export default About;
