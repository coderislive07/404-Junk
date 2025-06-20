import React from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./pages/home"
import Locations from "./pages/Locations"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Rates from "./pages/Rates"
function App() {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/rates" element={<Rates/>}></Route>
      <Route path = "/locations" element={<Locations/>}></Route>
      
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
