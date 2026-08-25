import { useRef } from "react";
import MemoryGame from "../assets/videos/MemoryGame.mp4";
import GenesisDesign from "../assets/videos/GenesisDesign.mp4";
import TasteBuds from "../assets/videos/TasteBuds.mp4";
import Bhromaon from "../assets/videos/Bhromaon.mp4";
import Netplay from "../assets/videos/Netplay.mp4";

const Projects = () => {
    const memorygameVideoRef = useRef(null);
    const genesisVideoRef = useRef(null);
    const tasteBudsVideoRef = useRef(null);
    const bhromaonVideoRef = useRef(null);
    const netPlayVideoRef = useRef(null);

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="cards">

                {/* Job Application Tracking System */}
                <div className="card">
                    <h3>Job Application Tracking System</h3>
                    <ul>
                        <li>📌 <strong>Challenge:</strong> Managing job postings, applicants, applications, and interviews through a secure, production-grade full stack app</li>
                        <li>💡 <strong>Solution:</strong> Built a REST API with Node.js, Express 5 and Prisma 6 on PostgreSQL, paired with a React 19 + Vite + TypeScript frontend</li>
                        <li>✨ <strong>Features:</strong> Full CRUD for jobs/applicants/applications/interviews, Auth0 JWT authentication on all protected endpoints, 26 integration & unit tests with Vitest, CORS locked to frontend origin, input validation with Zod</li>
                        <li>🎯 <strong>Focus:</strong> Security, test coverage, and automated deployment</li>
                        <li>🛠 <strong>Tech:</strong> React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Auth0, Docker, GitHub Actions</li>
                    </ul>
                    <a href="https://job-application-tracking-system-kry.vercel.app" target="_blank">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/JobApplication-Tracking-System" target="_blank">GitHub</a>
                </div>

                {/* Employee Scheduling - Shift & Serve */}
                <div className="card">
                    <h3>Shift & Serve — Employee Scheduling</h3>
                    <ul>
                        <li>📌 <strong>Challenge:</strong> Giving employers and staff at food & beverage establishments an easy way to manage shifts and availability</li>
                        <li>💡 <strong>Solution:</strong> Built a layered backend (controllers, services, routes, middleware) with Node.js, Express and Prisma on PostgreSQL, plus a React + TypeScript frontend</li>
                        <li>✨ <strong>Features:</strong> Staff registration & credential management, shift assignment by morning/afternoon/night, employee availability by shift and day, personal schedule views</li>
                        <li>🎯 <strong>Focus:</strong> Clean layered architecture, data validation with Zod, and structured logging with Winston</li>
                        <li>🛠 <strong>Tech:</strong> React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Zod, Winston</li>
                    </ul>
                    <a href="https://github.com/SonalMahe/employee-scheduling-project" target="_blank">GitHub</a>
                </div>

                {/* Travel Itinerary Group Project */}
                <div className="card">
                    <h3>Travel Itinerary Planner (Group Project)</h3>
                    <ul>
                        <li>📌 <strong>Challenge:</strong> Collaborating across a 3-person team to build a CLI tool for planning trips, activities, and budgets</li>
                        <li>💡 <strong>Solution:</strong> Developed a modular, service-based TypeScript architecture split across destination data, itinerary engine, and budget tracking</li>
                        <li>✨ <strong>Features:</strong> Create trips with destinations & dates, add/sort/filter activities by day or category, calculate and flag high-cost expenses, fetch live country data (currency, flag) from an external API</li>
                        <li>🎯 <strong>Focus:</strong> Async programming, array/data handling, and team collaboration via Git</li>
                        <li>🛠 <strong>Tech:</strong> TypeScript, Node.js</li>
                    </ul>
                    <a href="https://github.com/SonalMahe/Travel-Itinerary-GroupProject" target="_blank">GitHub</a>
                </div>

                {/* Genesis Design */}
                <div className="card">
                    <h3>Genesis Design</h3>
                    <div className="project-card-detail">
                        <video
                            ref={genesisVideoRef}
                            src={GenesisDesign}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                        // onMouseEnter={() => genesisVideoRef.current.play()}
                        // onMouseLeave={() => {
                        //     genesisVideoRef.current.pause();
                        //     genesisVideoRef.current.currentTime = 0;
                        // }}
                        />
                    </div>
                    <ul>
                        <li>📌 <strong>Challenge:</strong> Translating a detailed Figma design into a fully responsive, production-ready website</li>
                        <li>💡 <strong>Solution:</strong> Developed a multi-page layout using modern CSS Grid and modular SCSS</li>
                        <li>✨ <strong>Features:</strong> Pixel-perfect UI, responsive breakpoints, and clean component-based styling</li>
                        <li>🎯 <strong>Focus:</strong> Layout consistency, scalability, and cross-browser compatibility</li>
                        <li>🛠 <strong>Tech:</strong> HTML5, SCSS, CSS Grid</li>
                    </ul>
                    <a href="https://sonalmahe.github.io/Genesis-designA11/" target="_blank">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/Genesis-designA11" target="_blank">GitHub</a>
                </div>

                <div className="card">
                    <h3>Pokemon Memory Game</h3>

                    <div className="project-card-detail">
                        <video
                            ref={memorygameVideoRef}
                            src={MemoryGame}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                        // onMouseEnter={() => memorygameVideoRef.current.play()}
                        // onMouseLeave={() => {
                        //     tasteBudsVideoRef.current.pause();
                        //     tasteBudsVideoRef.current.currentTime = 0;
                        // }}
                        />
                    </div>

                    <ul>
                        <li>📌 <strong>Challenge:</strong> Designing and developing a responsive memory card game with smooth user interaction</li>
                        <li>💡 <strong>Solution:</strong> Implemented a dynamic React-based game logic with reusable components and state management</li>
                        <li>✨ <strong>Features:</strong> Card flip animation, score tracking, auto-reset gameplay, and video preview</li>
                        <li>🎯 <strong>Focus:</strong> Performance optimization, UX consistency, and responsive layout</li>
                        <li>🛠 <strong>Tech:</strong> React, JavaScript, CSS</li>
                    </ul>

                    <a href="https://pokemoncards-game.netlify.app/" target="_blank">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/MemoryGameProjects" target="_blank">GitHub</a>
                </div>


                {/* Taste Buds */}
                <div className="card">
                    <h3>Taste-Buds Restaurant Website</h3>

                    <div className="project-card-detail">
                        <video
                            ref={tasteBudsVideoRef}
                            src={TasteBuds}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                        // onMouseEnter={() => tasteBudsVideoRef.current.play()}
                        // onMouseLeave={() => {
                        //     tasteBudsVideoRef.current.pause();
                        //     tasteBudsVideoRef.current.currentTime = 0;
                        // }}
                        />
                    </div>

                    <ul>
                        <li>📌 <strong>Challenge:</strong> Collaborating in a team to design and build a fully responsive restaurant website</li>
                        <li>💡 <strong>Solution:</strong> Developed a clean, modern layout with intuitive navigation and structured content</li>
                        <li>✨ <strong>Features:</strong> Responsive design, clear menu presentation, and user-friendly page flow</li>
                        <li>🎯 <strong>Focus:</strong> User experience, accessibility, and visual consistency across devices</li>
                        <li>🛠 <strong>Tech:</strong> HTML5, CSS3</li>
                    </ul>
                    <a href="https://dancing-pegasus-d22bb8.netlify.app/" target="_blank">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/RestaurantProject" target="_blank">GitHub</a>
                </div>

                {/* Bhromaon */}
                <div className="card">
                    <h3>Bhromaon Website</h3>

                    <div className="project-card-detail">
                        <video
                            ref={bhromaonVideoRef}
                            src={Bhromaon}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                        // onMouseEnter={() => bhromaonVideoRef.current.play()}
                        // onMouseLeave={() => {
                        //     bhromaonVideoRef.current.pause();
                        //     bhromaonVideoRef.current.currentTime = 0;
                        // }}
                        />
                    </div>
                    <ul>
                        <li>📌 <strong>Challenge:</strong> Converting a detailed design into a fully responsive travel website</li>
                        <li>💡 <strong>Solution:</strong> Developed structured layouts with consistent styling and clean typography</li>
                        <li>✨ <strong>Features:</strong> Responsive sections, intuitive navigation, and visually appealing UI</li>
                        <li>🎯 <strong>Focus:</strong> User experience, design consistency, and cross-device responsiveness</li>
                        <li>🛠 <strong>Tech:</strong> HTML5, CSS3</li>
                    </ul>

                    <a href="https://sonalmahe.github.io/Module-1Test/" target="_blank">Live</a> |{" "}
                    <a href="https://github.com/SonalMahe/Module-1Test" target="_blank">Github</a>
                </div>

                {/* Netplay UI/UX */}
                <div className="card">
                    <h3>Netplay UI/UX App</h3>

                    <div className="project-card-detail">
                        <video
                            ref={netPlayVideoRef}
                            src={Netplay}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="project-video"
                        // onMouseEnter={() => netPlayVideoRef.current.play()}
                        // onMouseLeave={() => {
                        //     netPlayVideoRef.current.pause();
                        //     netPlayVideoRef.current.currentTime = 0;
                        // }}
                        />
                    </div>

                    <ul>
                        <li>📌 <strong>Challenge:</strong> Designing a mobile-first UI/UX concept app tailored for the youth audience</li>
                        <li>💡 <strong>Solution:</strong> Developed intuitive user flows, wireframes, and interactive prototypes</li>
                        <li>✨ <strong>Features:</strong> Clean and modern UI, usability-focused design, and seamless user interactions</li>
                        <li>🎯 <strong>Focus:</strong> User experience, visual consistency, and accessibility</li>
                        <li>🛠 <strong>Tech:</strong> Figma</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Projects;
