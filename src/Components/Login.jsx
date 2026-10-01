import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import {FIREBASE_AUTH} from "./FirebaseConfig.js";
import {signInWithEmailAndPassword} from "firebase/auth";

const auth=FIREBASE_AUTH;

function Login(){

const navigate=useNavigate()
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[message,setMessage]=useState("")

const emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/

function handleLogin(e){
    e.preventDefault()

    if(email=="" || password==""){
        setMessage("Your email and password are required!")
        setTimeout(()=>{
            window.location.reload()
        },2000)
    }
    else{
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            if(user){
                setMessage("Login successful!")
                setTimeout(()=>{
                    navigate("/tutors")
                },2000)
            }
            else{
                setMessage("Unknown user. Access denied!")
            }
        })
    }
    

}

    return(
        <section className="loginpage">
            <h2>Login Page</h2>

            <form>
                <h4>{message}</h4>
                <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} /><br />
                <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <button type="submit" onClick={handleLogin}>Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </section>
    )
}

export default Login