
import { useRef } from "react";
import GenesisDesign from "../assets/videos/GenesisDesign.mp4";
import TasteBuds from "../assets/videos/TasteBuds.mp4";

const Projects = () => {
    const genesisVideoRef = useRef(null);
    const tasteBudsVideoRef = useRef(null);

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="cards">

                {/* Genesis Design */}
                <div className="card">
                    <h3>Genesis Design</h3>

                    <div className="project-card-detail">
                        <video
                            ref={genesisVideoRef}
                            src={GenesisDesign}
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                            onMouseEnter={() => genesisVideoRef.current.play()}
                            onMouseLeave={() => {
                                genesisVideoRef.current.pause();
                                genesisVideoRef.current.currentTime = 0;
                            }}
                        />
                    </div>

                    <ul>
                        <li>📌 Challenges: Convert a complex Figma design into a responsive website</li>
                        <li>💡 Solution: Built a multi-page portfolio using CSS Grid & SCSS</li>
                        <li>✨ Fully responsive layout</li>
                        <li>🛠 Tech: HTML, SCSS, CSS Grid</li>
                    </ul>

                    <a href="https://sonalmahe.github.io/Genesis-designA11/">Live</a>
                </div>

                {/* Taste Buds */}
                <div className="card">
                    <h3>Taste-Buds Restaurant Website</h3>

                    <div className="project-card-detail">
                        <video
                            ref={tasteBudsVideoRef}
                            src={TasteBuds}
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                            onMouseEnter={() => tasteBudsVideoRef.current.play()}
                            onMouseLeave={() => {
                                tasteBudsVideoRef.current.pause();
                                tasteBudsVideoRef.current.currentTime = 0;
                            }}
                        />
                    </div>

                    <a href="#">Live</a> | <a href="#">Github</a>
                </div>

            </div>
        </section>
    );


};

export default Projects;
