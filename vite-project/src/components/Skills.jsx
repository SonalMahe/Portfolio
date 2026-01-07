import "./skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>

            {/* Skills Grid */}
            <div className="skills-grid">
                <Skill icon={<FaHtml5 />} label="HTML" />
                <Skill icon={<FaCss3Alt />} label="CSS" />
                <Skill icon={<FaFigma />} label="Figma" />
                <Skill icon={<FaJsSquare />} label="JavaScript" />
                <Skill icon={<FaReact />} label="React" />
                <Skill icon={<FaGitAlt />} label="Git & GitHub" />
                <Skill icon={<MdDesignServices />} label="UX/UI Design" />
                <Skill icon={<SiSass />} label="Sass" />
            </div>

            {/* Connect Section */}
            <div className="connect-section">
                <h3>Let’s Connect</h3>
                <p>
                    Interested in collaborating, discussing frontend development, or exploring new opportunities?
                    I’m always open to connecting with fellow developers, designers, and professionals.
                    Let’s build something great together.
                </p>

                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/sonal-maheshwari"
                        target="_blank"
                        rel="LinkedIn"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/SonalMahe"
                        target="_blank"
                        rel="Github"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href="https://facebook.com/SonalArunMaheshwari"
                        target="_blank"
                        rel="Facebook"
                    >
                        <FaFacebook />Facebook
                    </a>
                    <a
                        href="https://instagram.com/sonipartnersonal"
                        target="_blank"
                        rel="instagram"
                    >
                        <FaInstagram /> Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

const Skill = ({ icon, label }) => (
    <div className="skill-card">
        <div className="skill-icon">{icon}</div>
        <span>{label}</span>
    </div>
);

export default Skills;
