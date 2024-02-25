import './projects.styles.scss';

const Projects = () => {
    const projects = [
        {
            "id": 1,
            "title": "Makz clothing",
            "description" : "An e-commerece store",
            "imageUrl" : " ", 
            "gitHubUrl": " ",
        },
        {
            "id": 2,
            "title": "Background generator",
            "description" : "A CSS background generator that gives the color and CSS rule respectively",
            "imageUrl" : " ", 
            "gitHubUrl": " ",
        }, 
        {
            "id": "3",
            "title": "Monster Profile",
            "description" : "A profile for monsters",
            "imageUrl" : " ", 
            "gitHubUrl": " ",
        }, 
        {
            "id": "4",
            "title": "Monster Profile",
            "description" : "A profile for monsters",
            "imageUrl" : " ", 
            "gitHubUrl": " ",
        }, 



    ]
    return (
        <div>
            <h2>Here is the list of my most recent projects using HTML, JavaScript, CSS and React</h2>
            <div className="card-list">
            {
                projects.map((project) => {
                    const {id, title, description, imageUrl, gitHubUrl} = project
                    return (
                        <div className="card-container">
                            <img src={imageUrl} alt={description} />
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
};

export default Projects; 

