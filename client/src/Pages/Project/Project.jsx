import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import ScrollingContact from "../../Components/ScrollingContact/ScrollingContact";
const Project = () => {
  const data = [
    {
      id: 1,
      imageUrl: "pr1.png",
      heading: "SNAP FITNESS",
      link: "#",
      description: "Fitness & nutrition app for Snap Fitness members",
    },
    {
      id: 2,
      imageUrl: "pr2.png",
      heading: "ROCGELE PAINTING",
      link: "#",
      description: "Legacy modernisation & native app build",
    },
    {
      id: 3,
      imageUrl: "pr3.png",
      heading: "GOTURF",
      link: "#",
      description:
        "Web system and mobile app for delivery tracking and inventory management.",
    },
    {
      id: 4,
      imageUrl: "pr4.png",
      heading: "PURE GRAIN",
      link: "#",
      description:
        "Web system and mobile app for resource management and transportation.",
    },
  ];
  return (
    <div className="xsm:py-[3rem]">
      <div className="pt-[10%] px-[1%]">
        <div className="header">
          <h3 className="text-[1.2rem]">FEATURED PROJECTS</h3>
          <h1 className="text-[3.2rem]">
            See what we can <br />
            <span>do for you</span>
          </h1>
        </div>
        <div className="image-gallery xsm:flex-col my-6 px-[5%]">
          {data.map((image, index) => (
            <div
              key={image.id}
              className={
                index % 2
                  ? "image-container xsm:w-full my-12 py-0"
                  : "cont xsm:w-full"
              }
            >
              <img
                src={image.imageUrl}
                alt={image.heading}
                className="image xsm:w-[80%] mx-auto"
              />
              <div className="image-details">
                <h3 className="heading">{image.heading}</h3>
                <p className="description xsm:my-[-1rem]">
                  {image.description}
                </p>
                <a
                  href={image.link}
                  className="read-more text-black font-black"
                >
                  Read Case-Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollingContact />
    </div>
  );
};

export default Project;
