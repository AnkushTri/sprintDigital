import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const moveCenter = keyframes`
  0% {
    transform: translateY(-50%) translateX(-50%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%);
  }
`;

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper isScrolled={isScrolled}>
        <div className="title ">
          <h1>
            <span>Unique </span>Problems? Unique <span>Solution.</span>
          </h1>
        </div>
        <div className="content xsm:w-full">
          <p>
            Sprint builds custom software for business. We help organisations
            launch new digital products, automate processes and digitise
            workflows
          </p>
        </div>
      </Wrapper>
      {/* <BarProp isScrolled={isScrolled}>
        <TopArrow className="deco-top-arrow" />
        <BottomArrow className="deco-bottom-arrow" />
      </BarProp> */}
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--bg-color);
  padding: 1rem 5%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isScrolled }) => (isScrolled ? "0" : "1")};
  pointer-events: ${({ isScrolled }) => (isScrolled ? "none" : "auto")};

  @media screen and (max-width: 576px) {
    padding: 10% 5%;
  }

  .title {
    margin: 4rem 0;
    width: 70%;
    font-size: 4rem;
    color: #fff;
    letter-spacing: 5px;
    line-height: 1.5;
    span {
      color: var(--color-primary);
    }
    @media screen and (max-width: 576px) {
      width: 100% ;
      line-height: 1.2;
    }
  }

  .content {
    width: 60%;
    font-size: 1.2rem;
    p {
      color: #fff;
    }
    @media screen and (max-width: 576px) {
      width: 100% !important;
      line-height: 1.2 !important;
      margin-top: -2rem;
    }
  }
`;

const BarProp = styled.div`
  position: relative;
  padding: 0rem 2%;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .deco-top-arrow,
  .deco-bottom-arrow {
    width: 200px;
    height: 328px;
    min-height: 328px;
    max-height: 328px;
    transform-origin: center center;
    background: #b9c1c1;
    position: absolute;
    transition: all 1s ease;
  }

  .deco-top-arrow {
    top: 10%;
    left: 10%;
  }

  .deco-bottom-arrow {
    bottom: 10%;
    right: 10%;
  }

  ${({ isScrolled }) =>
    isScrolled &&
    `
    .deco-top-arrow {
      transform: translateY(-50%) translateX(-50%);
    }

    .deco-bottom-arrow {
      transform: translateY(-50%) translateX(-50%);
    }
  `}
`;

const TopArrow = styled.div`
  width: 200px;
  height: 328px;
  min-height: 328px;
  max-height: 328px;
  transform: skew(24deg) scale(1);
`;

const BottomArrow = styled.div`
  width: 200px;
  height: 328px;
  min-height: 328px;
  max-height: 328px;
  transform: skew(-24deg) scale(1);
`;

export default HeroSection;
