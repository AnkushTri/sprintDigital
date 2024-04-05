import React from 'react'
import styled from 'styled-components'

const Services = () => {

  const services = [
    {
      type: "Design",
      content: [
        {
          title: "Project Scoping",
          description:
            "Define project objectives, requirements, and deliverables.",
        },
        {
          title: "UI/UX Design",
          description:
            "Create intuitive and visually appealing user interfaces.",
        },
      ],
    },
    {
      type: "Development",
      content: [
        {
          title: "Web Applications",
          description: "Develop robust and scalable web-based applications.",
        },
        {
          title: "Mobile Applications",
          description: "Build native and cross-platform mobile applications.",
        },
        {
          title: "Legacy Modernisation",
          description: "Upgrade and modernize legacy software systems.",
        },
      ],
    },
    {
      type: "Support",
      content: [
        {
          title: "Support",
          description: "Provide ongoing maintenance and technical support.",
        },
        {
          title: "Software Consulting",
          description:
            "Offer expert advice and guidance on software solutions.",
        },
        {
          title: "Project Rescue",
          description:
            "Revive failing projects and ensure successful completion.",
        },
        {
          title: "Service Level Agreements",
          description:
            "Establish clear agreements for service quality and delivery.",
        },
      ],
    },
  ];



  return (
    <Wrapper>
      <h2 className='uppercase text-[grey]'>Services</h2>
      <div className="services xsm:flex-col mb-[-10%]">
        <h1 className='xsm:text-[3rem]'>
          What We <span>DO</span>
        </h1>
        <p>
          We are an Indian software development company that solves complex
          business problems with unique solutions. We deliver applications that
          bring real value to businesses and help them achieve their goals.
        </p>
      </div>
      <div className="service_type pt-[15%] xsm:flex-col">
        {
            services.map((el)=>{
               return <div className="ser" key={el}>
                <h2 className='xsm:text-[2rem]'>{el.type}</h2>
                {
                    el?.content.map((item)=>{
                        return <li>{item.title}</li>;
                    })
                }
                
                </div>
            })
        }
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 3%;
  .services {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 3.2rem;
      font-weight: bolder;
      flex: 1;
      span {
        color: var(--color-primary);
      }
    }
    p {
      flex: 1;
      font-size: 1.2rem;
      line-height: 1.4;
      font-weight: 500;
    }
  }
  .service_type {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    h1{
        font-weight: bolder;
        color:black;
        font-size: 3rem;
    }
    li {
    display: flex;
      font-size: 1.2rem;
      margin:1rem 0;
      list-style: none;
      margin-bottom: 20px;
      transform: translateY(-5px);
    }
    li::before {
      content: "";
      display: inline-block;
      width: 20px; 
      height: 20px; 
      border:1px solid black;
      background-color: #bce6e7; 
      border-radius: 50%;
      margin: 0px 0.5rem;
    }
  }
`;

export default Services