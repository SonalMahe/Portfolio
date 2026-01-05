import GenesisDesign from "../assets/videos/GenesisDesign.mp4";
import TasteBuds from "../assets/videos/TasteBuds.mp4";


const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="cards">
                <div className="card">
                    <h3>Genesis Design</h3>
                  <div className="project-card-detail"> 
                     <video src={GenesisDesign} 
                     autoPlay
                     loop
                     muted
                     playsInline
                     preload="metadata"
                     loading="lazy" 
                     fetchPriority="low" type="video/mp4"  className="project-video"> 
          Your browser does not support the video tag.
        </video></div>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>

                 <div className="card">
                    <h3>Taste-Buds Restaurnant Website</h3>
                  <div className="project-card-detail"> 
                     <video src={TasteBuds} 
                     autoPlay
                     loop
                     muted
                     playsInline
                     preload="metadata"
                     fetchPriority="low" type="video/mp4"  className="project-video"> 
          Your browser does not support the video tag.
        </video></div>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>

                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>

                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>
                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>
                <div className="card">
                    <h3>Todo App</h3>
                    <p>React CRUD application</p>
                    <a href="#">Live</a> | <a href="#">Code</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
