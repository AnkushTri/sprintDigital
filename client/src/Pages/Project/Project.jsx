import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
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
    <div>
      <div className="pt-[15%] px-[2%]">
        <div className="header">
          <h3>FEATURED PROJECTS</h3>
          <h1>
            See what we can <br />
            <span>do for you</span>
          </h1>
        </div>
        <div className="image-gallery">
          {data.map((image, index) => (
            <div
              key={image.id}
              className={index % 2 ? "image-container" : "cont"}
            >
              <img src={image.imageUrl} alt={image.heading} className="image" />
              <div className="image-details">
                <h3 className="heading">{image.heading}</h3>
                <p className="description">{image.description}</p>
                <a href={image.link} className="read-more">
                  Read Case-Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#63dfdd] relative ">
        <div className="marquee-wrapper text-[5rem] line-climb-6">
          <div className="marquee-container1 ">
            <p className="marquee-item">
              Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us
              Contact UsContact Us
            </p>
          </div>
          <div className="marquee-container">
            <p className="marquee-item ">
              Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us
              Contact UsContact Us
            </p>
          </div>
          <div className="text-[3rem] text-white text-center hover:my-5 text-bolder ">
            <Link to="/contact" className="cursor-pointer">
              {" "}
              Contact Us
            </Link>
          </div>
          <div className="marquee-container1 ">
            <p className="marquee-item">
              Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us
              Contact UsContact Us
            </p>
          </div>
          <div className="marquee-container">
            <p className="marquee-item">
              Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us
              Contact UsContact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
