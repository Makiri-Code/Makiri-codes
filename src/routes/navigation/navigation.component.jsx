import {useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
    const [openMenu, setOpenMenu] = useState(true)

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
    
    const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
      }); 

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }
    console.log(openMenu)


    return (
        <div >
            <div className="nav-container">
                <div className={`${isMobileDevice ? "logo-container" : "logo-container-mb"}`} ><h3><span>Emmanuel</span> Amakiri</h3></div>
                {isMobileDevice ? (
                    <div className="desktop-nav-link-container">
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
                ) : (  
                    <div>
                        <div className={`overlay ${openMenu ? "overlay-slide-right": "overlay-slide-left"}`}>
                            <nav>
                                <ul>
                                    <li><Link to='/' >Home</Link></li>
                                    <li><Link to='/about' >About</Link></li>
                                    <li><Link to='/projects' >Skills</Link></li>
                                    <li><Link to='/contact' >Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className= {`menu-bars ${openMenu ? "change" : ""}`} onClick={handleClick}>
                            <div className= "bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    )}
                </div>
            <Outlet/>
        </div>
    )
};

export default Navigation;