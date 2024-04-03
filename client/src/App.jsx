import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Articles from './Pages/Articles/Articles'
import Project from './Pages/Project/Project'
import Calculate from './Pages/Calculate/Calculate'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Contacts from './Components/Contacts/Contacts'
import Services from './Components/Services/Services'
import ScrollingContact from './Components/ScrollingContact/ScrollingContact'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ScrollingContact />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
