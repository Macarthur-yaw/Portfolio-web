
import { Routes,Route } from "react-router"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Project from "./Pages/Projects"
import Contacts from "./Pages/Contact"



function App() {


  return (
  <div className="bg-[#282C33]">
<div className="md:w-[85%] mx-auto">
<Routes>
  <Route index element={<Home/>}/>
<Route path="/project" element={<Project/>}/>
<Route path='/contact' element={<Contacts/>}/>
<Route path="/About" element={<About/>}/>

</Routes>
<Footer/>

</div>
    </div>
  )
}

export default App
