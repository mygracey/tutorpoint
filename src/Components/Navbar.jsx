import {Link} from "react-router-dom";
import {FaGraduationCap,FaBars,FaTimes} from "react-icons/fa";
import {useState} from "react";

function Navbar(){
const[mobileMenu,setMobileMenu]=useState(false)

const openMenu=()=>{
    let close=document.querySelector('.close')
    let open=document.querySelector('.open')
    let mobileMenu=document.querySelector('ul')
    mobileMenu.style.right="0"
    open.style.display="none"
    close.style.display="block"

    
}

const closeMenu=()=>{
    let close=document.querySelector('.close')
    let open=document.querySelector('.open')
    let mobileMenu=document.querySelector('ul')
    mobileMenu.style.right="-12.5rem"
    open.style.display="block"
    close.style.display="none"
}


    return(
        <section className="navbar container">
            <div className="logo"><FaGraduationCap size={30} className="icon"/> <h4>TutorPoint</h4></div>
            <ul>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/login" className="link login">Login</Link>
            </ul>
            <div className="open" onClick={openMenu}>
                <FaBars className="open-menu-icon"/>
            </div>
            <div className="close" onClick={closeMenu}>
                <FaTimes className="close-menu-icon"/>
            </div>
            

        </section>
    )
}

export default Navbar