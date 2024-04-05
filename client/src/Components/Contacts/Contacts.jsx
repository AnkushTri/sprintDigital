import React from 'react'
import './Contact.css'

function Contacts() {
  return (
    <>
      {/* contact form */}
      <div className="bg-[var(--color-primary)] w-[100%] contact_home flex py-12 px-[2%] xsm:flex-col px-[5%] py-[3rem] rounded-none bg-blue-300">
        <div className=" text-[white] flex-1 my-10">
          <h3 className=" text-[#464652] text-[1.2rem]">Get in touch</h3>
          <h1 className="text-[4rem] font-extrabold leading-[4.5rem]  my-5 ">
            Take the Next Step
          </h1>
          <p className="py-5 leading-7 text-[1.2rem]">
            Contact us now for a free no obligation meeting to discuss how we
            can help launch your digital project.
          </p>
        </div>
        <div className="flex-1 ml-[10%]">
          <form className=" ">
            <div className="flex flex-col w-[90%] my-3">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" className="py-2 px-2 rounded-lg" />
            </div>
            <div className="flex flex-col w-[90%] my-3">
              <label htmlFor="email" className='xsm:pb-[-1rem]'>Email Address*</label>
              <input type="email" id="email" className="py-2 px-2 rounded-lg" />
            </div>

            <div className="flex flex-col w-[90%] my-3">
              <label htmlFor="phone">Phone number*</label>
              <input
                type="number"
                id="phone"
                className="py-2 px-2 rounded-lg" />
            </div>

            <div className="flex flex-col w-[90%] my-3">
              <label htmlFor="message">Message*</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                className="py-1 px-2 rounded-lg"
              ></textarea>
            </div>

            <div className="flex w-[60%] justify-between px-2 items-center bg-white my-6">
              <div className='flex gap-2'>
                <input type="checkbox" name="terms" id="agree" required className='w-8 outline-none' />
                <p> I'm not a robot</p>
              </div>
              <img src="logos/captcha.png" alt="captcha" className="w-12" />
            </div>
            <div className=" border rounded-3xl w-[90%]  text-white my-3">
              <button type="button" className='py-3 w-[100%] mx-auto'>Send message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}



export default Contacts