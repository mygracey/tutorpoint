import {Link} from "react-router-dom";
import {FIREBASE_AUTH} from "./FirebaseConfig.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const auth=FIREBASE_AUTH;
function Register(){
const navigate=useNavigate()
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[cpassword,setCpassword]=useState("")
const[message,setMessage]=useState("")

const emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/

function handleRegister(e){
 e.preventDefault()
 if(email=="" || password=="" || cpassword==""){
    setMessage("Please, fill in all fields!")
    setTimeout(() => {
        window.location.reload()
    }, 3000);
 }
 else if(emailRegex.test(email) && password.length>6 && password.length<12 && password.length==cpassword.length){
    
    createUserWithEmailAndPassword(auth,email,password).then((user)=>{
        if(user){
            
            setMessage("Success! Redirecting to Login page...")
             setTimeout(()=>{
                 navigate("/login")
             },3000)           
           
        }
        else{
            setMessage("Sorry, something went wrong. Try again.")
        }
    })
 }
 else{
    setMessage("Check your email input and password length. Password length must be between 7 and 11 characters")
     setTimeout(()=>{
        window.location.reload()
    },3000)
 }
 
}

    return(
        <section className="registerpage">
            <h2>Register Page</h2>

             <form>
                <h4>{message}</h4>
                <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <input type="password" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}}/><br />
                <button type="submit" onClick={handleRegister}>Create Account</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </section>
    )
}

export default Register