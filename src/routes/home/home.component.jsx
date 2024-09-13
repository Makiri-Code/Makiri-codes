import { FaGithub, FaInstagram  } from "react-icons/fa6";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiHandWavingBold } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import './home.styles.scss';

const strings = ["Front End Developer", "React Js Developer", "UI Developer"]
const Home = () => {
    return (  
            <div className="home-container">
                    <div className="image-container">
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="txt-container">
                        <h2>Hello <span >{<PiHandWavingBold className="wave" />}</span></h2>
                        <p className="name"> I am Emmanuel Amakiri</p>
                        <h3>A <ReactTyped 
                                strings = {strings}
                                typeSpeed = {100}
                                loop
                                backSpeed={20}
                                showCursor = {true}
                                className = "typed"
                            />
                        </h3>
                        <p className="txt">A passionate front-end developer specialising in transmiting design concepts into seamless and interactive web experience using HTML, CSS and JavaScript.</p>
                        <div className="icon-container">
                        <span className="icons"><FaGithub className="icon" /></span>
                        <span className="icons"><FaLinkedinIn className="icon" /></span>
                        <span className="icons"><FaXTwitter  className="icon" /></span>
                        <span className="icons"><FaInstagram  className="icon" /></span>
                    </div>
                    <button>Download CV</button>
                    </div>
                    
                </div>
    );
};

export default Home;