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
    <div className="w-[100%] py-[3rem] px-[2%]">
      <div className="w-[60%] ">
        <h3 className=" text-[#464652] text-[1.2rem]">About Us</h3>
        <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
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
      <div className="w-[80%] flex justify-between gap-[5%] my-8">
        {apiImg?.map((item,index) => {
          return (
            <div key={index}>
              <img src={item.api} alt="api_img" />
            </div>
          );
        })}
      </div>
        
    </div>
  );
}

export default AboutUs