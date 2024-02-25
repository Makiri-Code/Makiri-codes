import { FaGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import './home.styles.scss'

const strings = ["Front End Developer", "React Js Developer", "UI Developer"]
const Home = () => {
    return (
       <div className="home-container">
            <div className="text-container">
                <h2>Hello <span >{<PiHandWavingBold className="wave" />}</span></h2>
                <span className="name"> I am Amakiri Emmanuel</span>
                <h2><ReactTyped 
                        strings = {strings}
                        typeSpeed = {100}
                        loop
                        backSpeed={20}
                        showCursor = {true}
                    /></h2>
            </div>
            <div className="icon-container">
                <span className="icons"><FaGithub className="icon" /></span>
                <span className="icons"><FaLinkedin className="icon" /></span>
                <span className="icons"><FaTwitter  className="icon" /></span>
                <span className="icons"><FaSquareInstagram className="icon" /></span>
            </div>
       </div>
    );
};

export default Home;