import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'
import Footer from './Components/Footer/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Contacts from './Components/Contacts/Contacts'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contacts/>} />
    <Route path="*" element={<Error/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
