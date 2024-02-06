import React from "react";
import {Link} from 'react-router-dom';
import Typewriter from "typewriter-effect";

import Button from "../../components/button/button.component";

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
                    <div className="button-links">
                        <Link to="/contact-me">
                            <Button buttonType='color'>
                            Contact Me
                            </Button>
                        </Link>
                        <Link to="/portfolio">
                            <Button>
                            Download my CV
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;