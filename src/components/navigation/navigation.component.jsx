import { useState } from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';
import  styles from './Navbar.module.css';

const Navigation = () => {

    // adding the states 
    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };


    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <span className='logo'>Cristina T.</span>
                </Link>
                <div className='nav-links-container'>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <Link className={`${styles.navLink} nav-link`} to='/my-work'>
                                My Work
                            </Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link className={`${styles.navLink} nav-link`} to='/about'>
                                About
                            </Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link className={`${styles.navLink} nav-link`} to='/contact-me'>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;