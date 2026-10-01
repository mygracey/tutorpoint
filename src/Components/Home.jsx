
import {FaUser} from "react-icons/fa";
import {FaClock} from "react-icons/fa";
import {FaLaptop} from "react-icons/fa";
import {FaHandshake} from "react-icons/fa";
import {FaStar} from "react-icons/fa"


import {Link} from "react-router-dom"

import student1 from "../assets/optimizedTutorpointimages/online-student1-elementor-io-optimized.jpeg"
import student2 from "../assets/optimizedTutorpointimages/online-student2-elementor-io-optimized.jpeg"
import testimony1 from "../assets/optimizedTutorpointimages/facefemale1-elementor-io-optimized.jpeg"
import testimony2 from "../assets/optimizedTutorpointimages/facemale1-elementor-io-optimized.jpeg"
import tutor1 from "../assets/optimizedTutorpointimages/online-tutor1-elementor-io-optimized.jpeg"
import tutor2 from "../assets/optimizedTutorpointimages/online-tutor2-elementor-io-optimized.jpeg"
import tutor3 from "../assets/optimizedTutorpointimages/teacher9-elementor-io-optimized.jpeg"

function Home(){
    return(
        <section className="home">
            <div className="banner container">
                     <div className="text-box">
                <h1>Find the right <span className="tutor">tutor</span>.<br /> Learn with Confidence.</h1>
                <p>TutorPoint connects students with skilled tutors for personalized learning that makes every lesson count.</p>
                <Link to="/login" className="btn-get-started">Get Started</Link>

                    </div>

                    <img src={tutor1} alt="" />
           
            </div>

            <section className="benefits container">

                <div className="card card1">
                    <FaUser className="icon"/>
                    <h4>Professional Tutors</h4>
                    <p>Learn from qualified tutors with strong knowledge and experience.</p>
                </div>

                <div className="card card2">
                    <FaClock className="icon"/>
                    <h4>24/7 Availability</h4>
                    <p>Get expert learning support anytime, anywhere - whenever you need it.</p>
                </div>

                <div className="card card3">
                    <FaLaptop className="icon"/>
                    <h4>Remote Learning</h4>
                    <p>Learn from anyhere, anytime, with expert tutors at your fingertips.</p>
                </div>

                <div className="card card4">
                    <FaHandshake className="icon"/>
                    <h4>One-on-One Tutoring</h4>
                    <p>Get personalized attention and lessons tailored to your leaning needs.</p>
                </div>

            </section>

            <section className="courses">
                <h2>Our Courses</h2>
                <p>Search for available courses by subject matter.</p>
                <div className="courses-wrapper">
                    <div className="card">
                        <h4>Mathematics</h4>
                    </div>

                    <div className="card">
                        <h4>English</h4>
                    </div>

                    <div className="card">
                        <h4>Coding</h4>
                    </div>

                    <div className="card">
                        <h4>Biology</h4>
                    </div>

                    <div className="card">
                        <h4>Physics</h4>
                    </div>

                    <div className="card">
                        <h4>French</h4>
                    </div>
                </div>
            </section>


            <div className="testimonials">
                <h2>Testimonials</h2>
                <p>See what our clients have to say...</p>

                <div className="slider-wrapper">


                    <div className="slider">
                        <div id="slider-1">
                            <img src={student1} alt="" />
                            <div className="particulars">
                                <h4>Brandon Hamilton</h4>
                                <p>Location: London</p>
                                <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/>
                            </div>
                            <p>During my last semester in school, I found some mathematical concepts really difficult to understand like mixed fractions and so on, my tutor on TutorPoint made them so easy for me to understand. Thanks a lot TutorPoint!</p>
                        </div>

                        <div id="slider-2">
                            <img src={testimony1} alt="" />
                            <div className="particulars">
                                <h4>Mabel Green</h4>
                                <p>Location: South Africa</p>
                                <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/>
                            </div>
                            <p>After so many years wanting to learn coding, I finally did! I enrolled for coding classes five months ago when I turned 46years old, just out of curiosity. Its five months after and I have landed my first job role in tech as a Front-End Engineer having learned to build beautiful sites using just HTML,CSS, and Javascript. Thank you sooo much, TutorPoint!</p>
                        </div>

                        <div id="slider-3">
                            <img src={student2} alt="" />
                            <div className="particulars">
                                <h4>Maduka Uche</h4>
                                <p>Location: Nigeria</p>
                                <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/>
                            </div>
                            <p>I have always liked Math but had difficulty understanding. After my Dad enrolled me for Maths classes which I took after school hours, I gained Confidence in solving math problems, and today, I am the best Mathematician in my class. Thanks to TutorPoint.</p>
                        </div>

                        <div id="slider-4">
                            <img src={testimony2} alt="" />
                             <div className="particulars">
                                <h4>Alex Lain</h4>
                                <p>Location: Nairobi Kenya</p>
                                <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/> <FaStar className="icon"/>
                            </div>
                            <p>I have always dreamed of learning to play the keyboard with a live coach. I enrolled for Music classes on the TutorPoint Platform, and I am currently being trained by an exceptional Tutor in Music. He is a great Pianist, and I am getting a lot of help from him. Thanks to TutorPoint.</p>
                        </div>
                    <div className="slider-nav">
                        <a href="#slider-1"></a>
                        <a href="#slider-2"></a>
                        <a href="#slider-3"></a>
                        <a href="#slider-4"></a>
                    </div>

                    </div>

                   
                </div>
            </div>


            <div className="cta-container container">
                 <img src={tutor3} alt="" />
                 <div className="text-box">
                    <h2>Acheive your dreams with TutorPoint</h2>
                    <p>Enrollment for Math,English,Music,Physics,and French Lessons are ongoing!</p>
                    <p>Hurry now to book lessons with your preferred Tutor!</p>
                 </div>
            </div>
           
           
        </section>
    )
}

export default Home