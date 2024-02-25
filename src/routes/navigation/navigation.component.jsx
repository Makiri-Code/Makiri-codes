import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

const Navigation = () => {
    const classNames = {
        home: ' ',
        about: ' ',
        project: ' ',
        contact: ' '
    }
    const [className, setClassName] = useState(classNames);
    const {home, about, project, contact} = className


    const homeClickHandler = () => {
        setClassName ({
            ...classNames,
            home: 'active'
        })
    };

    const aboutClickHandler = () => {
        setClassName ({
            ...classNames,
            about: 'active'
        })
    };
    const projectClickHandler = () => {
        setClassName ({
            ...classNames,
            project: 'active'
        })
    };
    const contactClickHandler = () => {
        setClassName ({
            ...classNames,
            contact: 'active'
        })
    };
    






    return (
        <div >
            <div className="nav-container">
                <div className="logo-container"/>
                <div className="nav-link-container">
                    <Link to='/' className={home} onClick={homeClickHandler}>
                        Home
                    </Link>
                    <Link to='/about' className={about} onClick={aboutClickHandler}>
                        About
                    </Link>
                    <Link to='/projects' className={project} onClick={projectClickHandler}>
                        My Work
                    </Link>
                    <Link to='/contact'className={contact} onClick={contactClickHandler}>
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
};

export default Navigation;