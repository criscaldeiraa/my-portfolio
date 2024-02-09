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
                            'Web Development',
                            'React Applications',
                            'Front and Back End Development',
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                        }}
                    />
                    </h3>
                    <div className="description-container">
                        <p className="description">As a skilled web developer proficient in React.js and experienced in front-end and back-end development, I specialize in crafting dynamic and user-friendly digital experiences.</p>
                        <p className="description">Whether you're seeking a modern website, a robust web application, or anything in between, I'm here to bring your vision to life.</p>
                        <p className="description">Explore my work and feel free to reach out — I'm excited to collaborate and help bring your projects to fruition.</p>
                    </div>
                    <div className="button-links">
                        <Link to="/portfolio">
                            <Button buttonType='color'>
                            Download my CV
                            </Button>
                        </Link>
                        <Link to="/contact-me">
                            <Button >
                            Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;