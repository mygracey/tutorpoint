import ErrorPage from "./Components/ErrorPage"
import Contact from "./Components/Contact" 
import About from "./Components/About"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Dashboard from "./Components/Dashboard"
import Register from "./Components/Register"
import Login from "./Components/Login"
import TutorPage from "./Components/TutorPage"
import Home from "./Components/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App(){

  return(
    <section className="app">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tutors" element={<TutorPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
          <Footer />
      </Router>
        
    </section>
  )

}

export default App