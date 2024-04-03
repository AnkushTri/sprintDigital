import React, { useEffect, useRef } from "react";
import { TimelineMax, Linear } from "gsap";
// import "./Ticker.css"; // Import CSS file for styling

const Ticker = () => {
  const tickerWrapperRef = useRef(null);
  const listRef = useRef(null);
  const clonedListRef = useRef(null);
  let infinite = null;

  useEffect(() => {
    const $tickerWrapper = tickerWrapperRef.current;
    const $list = listRef.current;
    const $clonedList = clonedListRef.current;
    const listItems = $list.querySelectorAll("li");

    let listWidth = 10;
    listItems.forEach((item) => {
      listWidth += item.offsetWidth;
    });

    const endPos = $tickerWrapper.offsetWidth - listWidth;

    $list.style.width = `${listWidth}px`;
    $clonedList.style.width = `${listWidth}px`;

    const timeline = new TimelineMax({ repeat: -1, paused: true });
    const time = 40;

    timeline
      .fromTo(
        $list,
        time,
        { rotation: 0.01, x: 0 },
        { force3D: true, x: -listWidth, ease: Linear.easeNone },
        0
      )
      .fromTo(
        $clonedList,
        time,
        { rotation: 0.01, x: listWidth },
        { force3D: true, x: 0, ease: Linear.easeNone },
        0
      )
      .set($list, { force3D: true, rotation: 0.01, x: listWidth })
      .to(
        $clonedList,
        time,
        { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone },
        time
      )
      .to(
        $list,
        time,
        { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
        time
      )
      .progress(1)
      .progress(0);

    infinite = timeline;

    $tickerWrapper.addEventListener("mouseenter", () => {
      infinite.pause();
    });

    $tickerWrapper.addEventListener("mouseleave", () => {
      infinite.play();
    });

    return () => {
      infinite.kill(); // Ensure animation is stopped when component unmounts
      $tickerWrapper.removeEventListener("mouseenter");
      $tickerWrapper.removeEventListener("mouseleave");
    };
  }, []);

  return (
    <div className="tickerwrapper" ref={tickerWrapperRef}>
      <ul className="list" ref={listRef}>
        <li className="listitem">
          <span>This is list item 1</span>
        </li>
        <li className="listitem">
          <span>This is list item 2</span>
        </li>
        <li className="listitem">
          <span>This is list item 3</span>
        </li>
        <li className="listitem">
          <span>This is list item 4</span>
        </li>
        <li className="listitem">
          <span>This is list item 5</span>
        </li>
        <li className="listitem">
          <span>This is list item 1</span>
        </li>
        <li className="listitem">
          <span>This is list item 2</span>
        </li>
        <li className="listitem">
          <span>This is list item 3</span>
        </li>
        <li className="listitem">
          <span>This is list item 4</span>
        </li>
        <li className="listitem">
          <span>This is list item 5</span>
        </li>
        <li className="listitem">
          <span>This is list item 1</span>
        </li>
        <li className="listitem">
          <span>This is list item 2</span>
        </li>
        <li className="listitem">
          <span>This is list item 3</span>
        </li>
        <li className="listitem">
          <span>This is list item 4</span>
        </li>
        <li className="listitem">
          <span>This is list item 5</span>
        </li>
      </ul>
      <ul className="list cloned" ref={clonedListRef}></ul>
    </div>
  );
};

export default Ticker;
