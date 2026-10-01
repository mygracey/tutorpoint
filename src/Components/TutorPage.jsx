import {useState,useEffect} from "react";
import {data} from "./data.js";
import {onAuthStateChanged,signOut} from "firebase/auth";
import {FIREBASE_AUTH} from "./FirebaseConfig.js";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const auth=FIREBASE_AUTH;



function TutorPage(){

const navigate=useNavigate()

const[search,setSearch]=useState("")
const[user,setUser]=useState(null)



useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
    })

   
},[])

    
function handleLogout(){
     signOut(auth)
     navigate("/")
}
    
 
    return(
        
        
        <section className="tutorpage">
        
           
           
            <form>
                <input type="text" placeholder="Search for Tutors using subject matter eg Math" onChange={(e)=>{setSearch(e.target.value)}}/>
            </form>


            
                  <div className="table-container">
           
            
             <table>
                <thead>
                    <tr>
                        <th>Profile Picture</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Course Fee</th>
                        <th><button className="btn-logout" onClick={handleLogout}>Log out</button></th>
                        
                    </tr>
                </thead>
{user? 
    
                <tbody>
                   
                   {data.filter((tutor)=>{
                    return search==="" ? tutor : tutor.course.includes(search)

                   }).map((tutor,id)=>{
                      return(
                        <tr key={id}>
                            
                            <td><img src={tutor.image} alt="" className="tutorImage"/></td>
                            <td>{tutor.name}</td>
                            <td>{tutor.course}</td>
                            <td>{tutor.courseFee}</td>
                            
                        </tr>
                      )

                    
                    
                   })}
                </tbody>
               : <h3 className="access-message">Please Login to view and Book a Tutor Today.</h3>  }       
                              
                       
            </table>

    
   
        </div>
            
        
        
        
        </section>

                


         )
                
        
}

export default TutorPage