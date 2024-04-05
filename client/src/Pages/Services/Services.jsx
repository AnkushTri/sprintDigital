import React from "react";
import ScrollingContact from "../../Components/ScrollingContact/ScrollingContact";
import { useNavigate } from "react-router-dom";
import Contacts from "../../Components/Contacts/Contacts";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(`/${path}`);
  };
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
      work: [
        " Software Consulting",
        "Project Rescue",
        "Service Level Agreements",
      ],
    },
  ];

  return (
    <div className="px-[3%] pt-[10%] w-[100%]xsm:px-[5%] py-[6rem]">
      <div className="w-[70%] xsm:w-full">
        <h3 className="text-[#4444489e] text-[1.2rem] uppercase font-bold ">
          Our Services
        </h3>
        <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5">
          Custom
          <span className="text-[var(--color-primary)]">
            {" "}
            Software Development{" "}
          </span>
          Services
        </h1>
        <p className="py-5 leading-7 text-[1.2rem] text-[#4b4a4a] w-[70%] xsm:w-full py-0">
          We are an India-based software agency that designs and develops
          digital products for the people that use them. Our strength lies in
          our talented team and our capability to develop end-to-end business
          process solutions in-house.
        </p>
      </div>
      <div className="py-6">
        {softwareData?.map((el, index) => {
          return (
            <div
              className="flex py-[6rem] gap-[8%] xsm:flex-col py-2"
              key={index}
            >
              <div className={index === 1 ? "flex-1 order-2" : "flex-1"}>
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
                  <div>
                    {el.work.map((data, index) => {
                      return (
                        <h2 className="py-2">
                          <a
                            to="projects"
                            className="py-1 hover:text-[#4d4b4b] hover:border-b-2 border-[#4d4b4b] transition-all duration-150 ease-in-out"
                            onClick={() => handleNav("projects")}
                          >
                            {data}
                          </a>
                        </h2>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img src={el.image} alt="hero" className="w-[100%]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="Expert mx-[-3%] bg-slate-100 flex py-8">
        <div className="">
          <h1 className="text-[3rem] my-3 text-center font-2xl">
            Talk to an Expert
          </h1>
          <div className="w-[80%] mx-auto xsm:w-full">
            <p className="py-1 leading-7 text-[1.2rem] text-[#4b4a4a] text-justify mx-6">
              At Sprint Digital, we are a trusted custom software development
              company and have a proven track record in delivering quality
              solutions that meet the specific needs of our clients.
            </p>
            <p className="py-1 leading-7 text-[1.2rem] text-[#4b4a4a] text-justify mx-6">
              Offering confidence and quality assurance in our services, we take
              a personalised approach to every project, working closely with our
              clients to ensure successful outcomes and custom software
              applications that work.
            </p>
            <p className="py-1 leading-7 text-[1.2rem] text-[#4b4a4a] text-justify mx-6">
              We're the team of software engineers you can trust when you're
              looking for reliable, long-lasting and innovative custom software
              development services. So, if you're looking for a partner to help
              you streamline your business operations, get in touch with Sprint
              Digital today.
            </p>
          </div>
          <div className=" border rounded-3xl w-[30%] mx-auto bg-[#45d3ef] text-[white] font-bolder my-6">
            <button type="button" className="py-3 w-[100%] mx-auto">
              Send message
            </button>
          </div>
        </div>
      </div>
      <div className="mx-[-3%] mb-[-15%] pb-[5%]">
        <Contacts />
      </div>
    </div>
  );
};

export default Services;
