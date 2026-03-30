
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import GreenHouse from "../../assets/images/GreenHouse/GreenHome-Sustentable.png";
import Hotel from "../../assets/images/Hotel/Hotel-Famous.png";
import Noir from "../../assets/images/Noir/Noir-Shop.png";
import Restaura from "../../assets/images/RestauraRestaurant/Restaura-Restaurant.png";
import MusicStore from "../../assets/images/Music Store/Music-store.png";
import Portfolio from "../../assets/images/Portfolio/Portfolio.png";
import Pizzeria from "../../assets/images/Pizzeria/Louggie-Pizzería.png";
import "./Projects.css";
import portfolioProjects from "../Pages/portfolioProjects";


export default function ProjectPage() {
    const navigate = useNavigate();
    // Usar los datos de portfolioProjects para las cards principales
    const projectData = portfolioProjects;

    return (
        <section className="project-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="project-content">
                <h1>My Projects</h1>
                <p>Here you can find some of the projects I've worked on. Each project showcases my skills and creativity in web development. Feel free to explore and see the variety of work I've done!</p>
            </div>
            <div className="project-gallery">
                {projectData.map((project) => (
                    <div className="project-card" key={project.slug}>

                    <Link to={project.route} className="project-card">
                        <img src={project.image} alt={project.slug} />
                            <div className="project-card-title">{project.title}</div>
                            <div className="project-card-subtitle">{project.description}</div>
                    </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

