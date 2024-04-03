import React from 'react'
import ScrollingContact from '../../Components/ScrollingContact/ScrollingContact';
import { useNavigate } from "react-router-dom";
import Contacts from '../../Components/Contacts/Contacts';

const Services = () => {

  const navigate=useNavigate()
  const handleNav=(path)=>{
    navigate(`/${path}`);
  }
  const softwareData = [
    {
      title: "Software Design",
      description1:
        "Sprint specialises in automating complex business processes. Our team of developers and web engineers pride ourselves on streamlining business operations to eliminate inefficiencies and provide a competitive advantage, across a wide range of industries - and we're ready to assist you with your operational requirements today.",
      description2:
        "We take the time to understand your unique business processes, management systems and current software systems, to ensure we tailor a custom software solution plan to suit. We also assess the business's potential for growth, to ensure our software grows alongside the business, rather than falling behind.",
      image: "services-img/hero-software.png",
      work: ["Project Scoping", "UI/UX Design"],
    },
    {
      title: "Development",
      description1:
        "At Sprint Digital, we have a proven track record in delivering high quality software solutions that improve our clients' bottom line. Our team of experts are adept at working within your budget and timeline. ",
      description2:
        "We thrive on developing state of the art technology solutions for our clients, and have a deep understanding of what it takes to get the job done right. From web and app development to technology consulting, Sprint Digital is your go-to technology partner in Australia.",
      image: "services-img/hero-development.png",
      work: ["Web Applications", "Mobile Applications", "Legacy Modernisation"],
    },
    {
      title: "Support",
      description:
        "Ongoing service and support are key components of our custom software development process. We don't simply deliver a solution and forget about you. Our team is always on hand to ensure your software keeps pace with the latest changes, keeping you ahead of the competition. Sprint Digital takes the time to understand each business individually, working closely with our clients to build custom software that solve complex business problems and accelerate growth.",
      description2:
        " Whether you need a new bespoke software product built from scratch, an existing solution modernised or anything in between, our team has the years of experience and expertise to get the job done. Talk to us about your custom software development needs today.",
      image: "services-img/hero-support.png",
      work: [" Software Consulting", "Project Rescue", "Service Level Agreements"],
    },
  ];


  return (
    <div className="px-[3%] py-[10rem]">
      <div className="w-[50%]">
        <h3 className="text-[#464652] text-[1.2rem]">Services</h3>
        <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
          Custom{" "}
          <span className="text-[var(--color-primary)]">
            Software Development{" "}
          </span>
          Service
        </h1>
        <p className="py-5 leading-7 text-[1.2rem] text-[#4b4a4a]">
          We are an India-based software agency that designs and develops
          digital products for the people that use them. Our strength lies in
          our talented team and our capability to develop end-to-end business
          process solutions in-house.
        </p>
      </div>
      <div>
        {softwareData?.map((el,index) => {
          return (
            <div className="flex py-[6rem] gap-[8%]" key={index}>
              <div className={index===1?"flex-1 order-2":"flex-1"}>
                <h1 className="text-[2.5rem] font-extrabold leading-[4.5rem]  mt-5">
                  {el.title}
                </h1>
                <p className="py-5 leading-7 text-[1.2rem] text-[#4b4a4a]">
                  {el.description1}
                </p>
                <p className="py-1 leading-7 text-[1.2rem] text-[#4b4a4a]">
                  {el.description2}
                </p>
                <div className="my-8">
                  <h2 className="text-[#464652] text-[1.2rem] uppercase py-2">
                    Things we do
                  </h2>
                  <div>{el.work.map((data,index)=>{
                    return(
                    <h2 className="py-2 ">
                      <button
                        to="projects"
                        className="border-black border-b-[3px] py-1 hover:text-[#4d4b4b]"
                        onClick={() => handleNav("projects")}
                      >
                       {data}
                      </button>
                    </h2>
                    );
                  })}</div>
                  
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={el.image}
                  alt="hero"
                  className="w-[100%]"
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mx-[-3%] mb-[-15%]">
       <Contacts/>
      </div>
    </div>
  );
}

export default Services