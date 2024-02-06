import React from "react";
import {Link} from 'react-router-dom';
import Typewriter from "typewriter-effect";

import profile from '../../assets/images/profile.jpeg'
import './home.styles.css';



const Home = () => {
    return (
        <div className="container">
            <div className="profile-img">
                <img src={profile} alt="Cristina Profile" />
            </div>
            <div>
                <div>
                    <h1>Hey, I'm <span className="name">Cristina Teixeira</span></h1>
                    <h3>
                    <Typewriter
                        options={{
                        strings: [
                            'I love coding',
                            'Responsive Designs',
                            'I Develope web apps',
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                        }}
                    />
                    </h3>
                    <p>I am a Web Developer with experience in the front end and back end</p>
                    <div>
                        <Link to="/portfolio">
                            <div>
                            My Portfolio
                            </div>
                        </Link>
                        <Link to="/contact-me">
                            <div>
                            Contact Me
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;