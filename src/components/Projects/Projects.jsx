import { Link } from "react-router-dom";
import portfolioProjects from "../Pages/portfolioProjects";
import "./Projects.css";

const copyByLang = {
    en: {
        title: "My Projects",
        description:
            "Discover some of my featured work below. Click on any project to learn more about the process, requirements, and key features.",
    },
    es: {
        title: "Mis Proyectos",
        description:
            "Descubrí algunos de mis trabajos destacados. Hacé clic en cualquier proyecto para conocer más sobre el proceso, requisitos y funcionalidades clave.",
    },
};

export default function Projects({ lang = "en" }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <section className="projects" id="projects">
            <div className="projects__overlay" aria-hidden="true" />
            <div className="projects__content">
                <h2>{copy.title}</h2>
                <p>{copy.description}</p>
            </div>
            <div className="projects-gallery">
                {portfolioProjects.map((project) => (
                    <Link to={project.route} className="home-card" key={project.slug}>
                        <div className="project-card">
                        <div className="home-card-img-wrapper">
                            <img
                                src={project.image}
                                alt={lang === "es" ? (project.titleEs ?? project.title) : project.title}
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                            />
                        </div>
                        <div className="content-card">
                            <div className="project-card-title">{lang === "es" ? (project.titleEs ?? project.title) : project.title}</div>
                            <div className="project-card-subtitle">{lang === "es" ? (project.descriptionEs ?? project.description) : project.description}</div>
                        </div>
                        </div>

                    </Link>
                ))}
            </div>
        </section>
    );
}