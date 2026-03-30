import { Link } from "react-router-dom";
import portfolioProjects from "./portfolioProjects";

const copyByLang = {
  en: {
    sectionTitle: "More from my portfolio",
    sectionAria: "More projects from my portfolio",
  },
  es: {
    sectionTitle: "Más de mi portfolio",
    sectionAria: "Más proyectos de mi portfolio",
  },
};

export default function ProjectGallery({ currentProject, lang = "en" }) {
  const otherProjects = portfolioProjects.filter(
    (project) => project.slug !== currentProject,
  );
  const copy = copyByLang[lang] ?? copyByLang.en;

  return (
    <section className="card-galery" aria-label={copy.sectionAria}>
      <h4>{copy.sectionTitle}</h4>

      <div className="card-galery__grid">
        {otherProjects.map((project) => (
          <Link key={project.slug} to={project.route} className="galery">
            <img
              src={project.image}
              alt={lang === "es" ? (project.titleEs ?? project.title) : project.title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <h5>{lang === "es" ? (project.titleEs ?? project.title) : project.title}</h5>
            <p>{lang === "es" ? (project.descriptionEs ?? project.description) : project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
