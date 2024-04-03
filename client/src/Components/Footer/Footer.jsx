import React from "react";
import { IoIosStar } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#494949] flex flex-col px-[10%] py-12">
      <div className="flex ">
        <div className="w-[65%]">
          <h1 className="text-[1.8rem] text-white font-bolder my-4">
            Ready when You are
          </h1>
          <button className="bg-[#7cecf6] text-white rounded-3xl py-2 px-3">
            Get in Touch
          </button>
        </div>
        <div className="w-[35%] flex gap-2 text-[white]">
          <div className="my-1">
            <p className="uppercase text-[0.8rem] py-1">Review on</p>
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                widths="20px"
                viewBox="0 0 87.861 25"
              >
                <path
                  fill="%23FFF"
                  d="M22.861 0h4v25h-4zm18 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4v9.025zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zm15.597 17.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694-.608.542zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631"
                />
                <path
                  fill="%23FF3D2E"
                  d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784"
                />
                <path
                  fill="%23FFF"
                  d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717-.631.63z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="flex my-2 text-[#e25641]">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <h1 className="uppercase text-white ">7 Reviews</h1>
          </div>
        </div>
      </div>

      <div className="flex text-white w-[40%] my-12">
        <div className="flex-1 text-[1.2rem]">
          {" "}
          <h2 className="py-2 text-[#bab7b7]">Explore</h2>
          <ul>
            <li className="py-2">
              <a href="">About</a>
            </li>
            <li className="py-2">
              <a href="">Projects</a>
            </li>
            <li className="py-2">
              <a href="">Carrier</a>
            </li>
          </ul>
        </div>
        <div className="text-[1.2rem]">
          <h2 className="py-2 text-[#bab7b7]">Follow us on</h2>
          <ul>
            <li className="py-2">
              <a href="">Facebook</a>
            </li>
            <li className="py-2">
              <a href="">Instagram</a>
            </li>
            <li className="py-2">
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex text-[#bab7b7] my-2">
        <div className="w-[65%] flex gap-4">
          <p>Privay Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="w-[35%] text-center">
          © 2024 Sprint. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
