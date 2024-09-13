import './about.styles.scss'

const About = () => {
    return (
        <div className="about-me-container">
            <div className="image-container">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Photo" />
            </div>
            <div className="about-text-box">
            <h2>About Me</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, soluta culpa nemo, cum vero est atque mollitia, enim maxime quasi nam reprehenderit. Temporibus nemo, unde explicabo sunt porro tempora quam!</p>
            </div>
        </div>
    )
};

export default About;