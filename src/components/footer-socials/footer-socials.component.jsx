import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../../assets/images/github.svg';

import './footer-socials.styles.css';

const Socials = () => {
    return (
        <div className='footer'>
            <span className='credits'>
                Made by Cris T. - Check out <a href='https://github.com/criscaldeiraa/my-portfolio' className='a-hover'>
                    Source Code</a>
            </span>
            <div className='social-icons'>
                <a href='www.linkedin.com/in/criscaldeirat'>
                    <Linkedin className='social-icon' />
                </a>
                <a href='https://github.com/criscaldeiraa'>
                    <Github className='social-icon' />
                </a>
            </div>
        </div>
    )
}

export default Socials;