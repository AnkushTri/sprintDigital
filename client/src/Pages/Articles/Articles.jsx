import React from "react";
import "./Articles.css";
const Articles = () => {
  const article = [
    {
      id: "1",
      h2: "APP TRENDS",
      image: "ar1.jpeg",
      title:
        "New App Trends: The Future of Custom Software And App Development",
      paragraph:
        "At Sprint Digital, we are always at the forefront of app trends and how we should look to the future to scale and shift our creations accordingly.",
      link: "https://sprintdigital.com.au/articles/the-future-of-custom-software-and-app-development",
    },
    {
      id: "2",
      h2: "UI/UX DESIGN",
      image: "ar2.png",
      title: "The importance of UX/UI design in custom app development",
      paragraph:
        "Australians spend quite a bit of time looking at their phones. According to research undertaken in 2021, ",
      link: "https://sprintdigital.com.au/articles/the-importance-of-ux-ui-design-in-custom-apps",
    },
    {
      id: "3",
      h2: "APPS",
      image: "ar3.jpeg",
      title: "Finding a custom mobile app development company",
      paragraph:
        "When there are a thousand different app development companies vying for your attention and business, it can be difficult to pick out the best company for you",
      link: "https://sprintdigital.com.au/articles/finding-a-custom-mobile-app-development-company",
    },
    {
      id: "4",
      h2: "APPS",
      image: "ar4.jpg",
      title: "The app trends that shaped 2022",
      paragraph:
        "The digital world is a fast-moving one, and this includes the development of new apps that quickly become a part of our everyday lives.",
      link: "https://sprintdigital.com.au/articles/app-trends-that-shaped-2022",
    },
    {
      id: "5",
      image: "ar5.jpeg",
      h2: "DEVELOPMENT",
      title: "A breakdown of mobile app development costs",
      paragraph:
        "The digital world runs on apps, offering an excellent means of collaboration via Cloud-based technolog.",
      link: "https://sprintdigital.com.au/articles/mobile-app-development-costs",
    },
    {
      id: "6",
      h2: "SOFTWARE",
      image: "ar6.png",
      title: "Top 5 benefits of developing in-house software for your company",
      paragraph:
        "When it comes to software for your business, there are two main options: in-house software, and third-party software. Both have their pros and cons,",
      link: "https://sprintdigital.com.au/articles/top-5-benefits-of-developing-in-house-software",
    },
    {
      id: "7",
      h2: "BUSINESS EFFICIENCY",
      image: "ar7.jpg",
      title: "How personalised software can improve business efficiency.",
      paragraph:
        "As any business owner knows, efficiency is key to success. In today's fast- paced and ever - changing world, ",
      link: "https://sprintdigital.com.au/articles/how-personalised-software-can-improve-business-efficiency",
    },
    {
      id: "8",
      h2: "DEVELOPEMNT",
      image: "ar8.jpeg",
      title: "Does your business need a digital transformation?",
      paragraph:
        "In today's business world, digital transformation is becoming more and more of a necessity.",
      link: "https://sprintdigital.com.au/articles/does-your-business-need-a-digital-transformation",
    },
    {
      id: "9",
      h2: "TECHNOLOGY",
      image: "ar9.jpeg",
      title: "Laravel & Xero — A dream combo",
      paragraph:
        "Working with 3rd party APIs can always be a hassle but one particular platform we absolutely love working with. ",
      link: "https://sprintdigital.com.au/articles/laravel-xero-a-dream-combo",
    },
  ];
  return (
    <div className="py-[5%] ">
      <div className="article px-[3%] ">
        <h2 className="text-[1.3rem] text-[#46465294]  ">ARTICLES</h2>
        <h1 className=" py-2 text-[3em] font-bold">A collection of </h1>
        <span className=" py-2 text-[3rem] font-bold">
          <h1>articles tips & </h1>
          <h1>customer stories</h1>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-5 px-[5%] py-5 xsm:grid-cols-1">
        {article.map((item) => (
          <div className="">
            <a
              key={item.id}
              href={item.link}
              className="card p-[2rem] items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                height="100%"
                width="100%"
                className="rounded-lg"
              />
              <h3 className="p-3">{item.h2}</h3>
              <h2 className="p-1">{item.title}</h2>
              <p className="p-1">{item.paragraph}</p>
              <a className="rm p-1" href={item.link}>
                Read More..
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
