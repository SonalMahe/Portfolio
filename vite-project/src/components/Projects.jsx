import { useRef } from "react";
import GenesisDesign from "../assets/videos/GenesisDesign.mp4";
import TasteBuds from "../assets/videos/TasteBuds.mp4";
import Bhromaon from "../assets/videos/Bhromaon.mp4";
import Netplay from "../assets/videos/NetplayUIUX.mp4";

const Projects = () => {
    const genesisVideoRef = useRef(null);
    const tasteBudsVideoRef = useRef(null);
    const bhromaonVideoRef = useRef(null);
    const netPlayVideoRef = useRef(null);

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
                        <li>📌 Challenges: Converting a complex Figma design into a responsive website</li>
                        <li>💡 Solution: Built a multi-page portfolio using CSS Grid & SCSS</li>
                        <li>✨ Fully responsive layout</li>
                        <li>🛠 Tech: HTML, SCSS, CSS Grid</li>
                    </ul>

                    <a href="https://sonalmahe.github.io/Genesis-designA11/">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/Genesis-designA11">GitHub</a>
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

                    <ul>
                        <li>📌 Challenges: Designing a responsive restaurant website (group project)</li>
                        <li>💡 Solution: Created a modern layout with intuitive navigation</li>
                        <li>✨ Features: Responsive design, clear menu presentation</li>
                        <li>🎯 Focus: UX, accessibility, visual consistency</li>
                        <li>🛠 Tech: HTML, CSS</li>
                    </ul>

                    <a href="#">Live</a> |{" "}
                    <a href="https://github.com/unsworthemily/Group-4-Restaurant-website">GitHub</a>
                </div>

                {/* Bhromaon */}
                <div className="card">
                    <h3>Bhromaon Website</h3>

                    <div className="project-card-detail">
                        <video
                            ref={bhromaonVideoRef}
                            src={Bhromaon}
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                            onMouseEnter={() => bhromaonVideoRef.current.play()}
                            onMouseLeave={() => {
                                bhromaonVideoRef.current.pause();
                                bhromaonVideoRef.current.currentTime = 0;
                            }}
                        />
                    </div>

                    <ul>
                        <li>📌 Challenges: Translating a design into a responsive travel website</li>
                        <li>💡 Solution: Built structured layouts with consistent styling</li>
                        <li>✨ Features: Responsive sections and clean UI</li>
                        <li>🛠 Tech: HTML, CSS</li>
                    </ul>

                    <a href="#">Live</a>
                </div>

                {/* Netplay UI/UX */}
                <div className="card">
                    <h3>Netplay UI/UX App</h3>

                    <div className="project-card-detail">
                        <video
                            ref={netPlayVideoRef}
                            src={Netplay}
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                            onMouseEnter={() => netPlayVideoRef.current.play()}
                            onMouseLeave={() => {
                                netPlayVideoRef.current.pause();
                                netPlayVideoRef.current.currentTime = 0;
                            }}
                        />
                    </div>

                    <ul>
                        <li>📌 Challenges: Designing a mobile-first UI/UX concept app for youth generation </li>
                        <li>💡 Solution: Created intuitive user flows and wireframes and prototyping</li>
                        <li>✨ Features: Clean UI, usability-focused design , user-friendly</li>
                        <li>🛠 Tech: Figma</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Projects;
