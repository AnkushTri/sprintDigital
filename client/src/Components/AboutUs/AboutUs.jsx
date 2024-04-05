import React from 'react'

const AboutUs = () => {

  const apiImg=[
    {
      api:"api-images/api-01.png"
    },
    {
      api:"api-images/api-02.png"
    },
    {
      api:"api-images/api-03.png"
    },
    {
      api:"api-images/api-04.png"
    },
    {
      api:"api-images/api-05.png"
    },
    {
      api:"api-images/api-06.png"
    },
  ]

  return (
    <div className="w-[100%] py-[5%] px-[3%] xsm:px-[5%]">
      <div className="w-[60%] xsm:w-[100%]">
        <h3 className=" text-[#464652] text-[1.2rem] uppercase">About Us</h3>
        <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5 xsm:leading-[4rem] text-[3.2rem]">
          We work{" "}
          <span className="text-[var(--color-primary)]">with you, </span>
          not for you.
        </h1>
        <p className="py-5 leading-7 text-[1.2rem]">
          When you partner with us, we become an extension of your team. We
          adopt a collaborative process throughout the development journey,
          working closely with you to deliver the best solutions for your
          business.
        </p>
        <a href="" className="border-b border-black text-[1.2rem]">
          More about us
        </a>
      </div>
      <div>
        <h3 className=" text-[#464652] text-[1.2rem] uppercase mt-[6rem] py-5">
          Some of the apis we work with
        </h3>
      </div>
      <div className="w-[80%] flex justify-between gap-[5%] my-8 xsm:w-full">
        {apiImg?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.api} alt="api_img" />
            </div>
          );
        })}
      </div>
      <div className="w-[100%] py-[10%]">
        <div className="title  w-[50%] text-center mx-auto xsm:w-full">
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5 xsm:leading-[4rem] text-[3.2rem]">
            Get Your Head in the{" "}
            <span className="text-[var(--color-primary)]"> Cloud</span>
          </h1>
          <p className="py-5 leading-7 text-[1.2rem] xsm:py-1 text-justify">
            Day dreaming of changing the world, or maybe just your business?
            Whichever it may be, we're backing you to make it happen. The sky's
            the limit, so what can we help you achieve?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs