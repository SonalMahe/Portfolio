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
                        <video src={GenesisDesign} s
                            loop
                            muted
                            playsInline
                            fetchPriority="low" type="video/mp4" className="project-video">
                        </video></div>
                    Genesis Design
                    <ul>
                        <li>📌Challenges: Convert a complex Figma design into a responsive website</li>

                        <li>💡Solution: Built a multi-page portfolio using CSS Grid & SCSS
                        </li>

                        ✨ Features:

                        <li>Fully responsive layout</li>

                        <li>Modular SCSS architecture </li>

                        <li>Smooth animations</li>

                        <li> 🛠 Tech: HTML, SCSS, CSS Grid</li>

                    </ul>

                    <a href="https://sonalmahe.github.io/Genesis-designA11/"> Live</a>
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
                            fetchPriority="low" type="video/mp4" className="project-video">
                        </video></div>
                    <p></p>
                    <a href="#">Live</a> | <a href="">Github</a>
                </div>

                <div className="card">
                    <h3>BHROMAON</h3>
                    <p></p>
                    <a button href="https://sonalmahe.github.io/Module-1Test/">Live</a>
                </div>

                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a>
                </div>
                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>React based personal portfolio</p>
                    <a href="#">Live</a>
                </div>
                <div className="card">
                    <h3>Todo App</h3>
                    <p>React CRUD application</p>
                    <a href="#">Live</a> | <a href="#">Github</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
