import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

import '../../assets/fonts/Protest_Revolution/ProtestRevolution-Regular.ttf'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <span className='logo'>Cristina T.</span>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link skills' to='/skills'>
                        skills
                    </Link>
                    <Link className='nav-link my-work' to='/my-work'>
                        my-work
                    </Link>
                    <Link className='nav-link contact-me' to='/contact-me'>
                        contact-me
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;