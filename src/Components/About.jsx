import student1 from "../assets/optimizedTutorpointimages/online-student1-elementor-io-optimized.jpeg"
import {Link} from "react-router-dom";

function About(){

    return(
        <section className="about">
            <div className="banner-section container">
               
                <div className="text-box">
                    <h2>Learning Made <span id="simple">Simple</span>. Support Made Personal.</h2>
                    <p>At TutorPoint, we believe every learner deserves access to 
                        the rigt tutor and the right learning support.
                    </p>

                    <Link to="/login" className="btn-about">Find a Tutor</Link>
                </div>

                 <img src={student1} alt="" />
            </div>
            <div className="about-us container">
                <h2>About TutorPoint</h2>
                <p>We are an online tutoring platform designed to connect students with professional tutors for personlized, convenient, and effective learning. Whether you need help understanding a difficult subject, preparing for an exam, or developing a new skill,
                    TutorPoint makes it easier to find the support you need.
                </p>
            </div>

            <div className="vision-mission container">
                <h3>Our Vision</h3>
                <p>To make quality education accessible to every learner, anytime and anywhere.</p>

                <h3>Our Mission</h3>
                <p>To connect students with professional tutors through personalized, flexible, and engaging learning experiences that inspire growth and academic success.</p>
                
            </div>

            <div className="about-us-cta container">
                <h3>Ready to connect with your <span id="tutor">Tutor</span> Today?</h3>
               <p> Hurry now cos Its just one click away and your are in! Begin your dream course today, and get a globally recognized Certificate upon completion.</p>
                
                 <Link to="/login" className="btn-cta">Find a Tutor</Link>
            </div>
        </section>
    )
}

export default About