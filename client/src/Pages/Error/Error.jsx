import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="bg-[rgb(200,200,205)] w-[100%] h-[100vh] relative ">
      <div className="py-[5%] px-[2%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="py-4 text-8xl font-extrabold">404 error</h1>
        <p className="py-2 text-[1.2rem]">This page doesn't exist.</p>
        <p className="py-2 text-[1.2rem]">
          Would you like to <span>visit the home page</span>
        </p>
       <Link to="/">
          Go back to <button className="text-[#6868df">Home page</button>
        </Link>
      </div>
    </div>
  );
}

export default Error