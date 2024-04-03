import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-[#c8c8cd] w-[100%] h-[100vh] flex justify-between items-center'>
      <h1>404 error</h1>
      <p>This page doesn't exist.</p>
      <p>Woul you like to <span>visit the home page</span></p>
      <Link to="/">Go back to Home page</Link>
    </div>
  )
}

export default Error