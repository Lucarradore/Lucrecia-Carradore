import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";

import "./Pages.css";

const logoRestaura = "/images/RestauraRestaurant/RestauraLogo.png";
const logoRestaura2 = "/images/RestauraRestaurant/RestauraLogo2.png";
const image = "/images/RestauraRestaurant/restaura-image.jpeg";
const image2 = "/images/RestauraRestaurant/restaura-image2.jpeg";
const image3 = "/images/RestauraRestaurant/restaura-image3.jpeg";
const page = "/images/RestauraRestaurant/pagina-restaura1.png";
const page2 = "/images/RestauraRestaurant/pagina-restaura2.png";

const copyByLang = {
    en: {
        back: "← Back to home",
        toggleAria: "Switch language to Spanish",
        toggleLabel: "ES",
        title: "Restaura Restaurant",
        subtitle: "Website development & design",
        intro:
            "Restaura Restaurant is a project focused on creating a unique and memorable dining experience. The project aims to design and build a restaurant that offers exceptional cuisine, ambiance, and service while ensuring a comfortable and enjoyable experience for guests. By incorporating innovative design principles, high-quality materials, and creative solutions, Restaura Restaurant strives to contribute to a premium dining experience.",
        brandTitle: "Creating the brand",
        brandText:
            "The brand identity for Restaura Restaurant was developed to reflect the project's commitment to providing a unique and memorable dining experience. The logo, color palette, and typography were carefully chosen to convey a sense of elegance, creativity, and modernity. By establishing a strong and cohesive brand, Restaura Restaurant aims to effectively communicate its mission and values to the target audience.",
        visualsTitle: "Designing the visuals",
        visualsText:
            "The visual design of Restaura Restaurant was created to evoke a sense of elegance and creativity. The use of sophisticated color schemes, high-quality imagery, and modern design elements helps to reinforce the project's focus on providing a premium dining experience. The visuals were crafted to inspire and engage the audience, encouraging them to consider Restaura Restaurant as a top choice for their dining needs.",
    },
    es: {
        back: "← Volver al inicio",
        toggleAria: "Cambiar idioma a inglés",
        toggleLabel: "EN",
        title: "Restaura Restaurant",
        subtitle: "Desarrollo y diseño web",
        intro:
            "Restaura Restaurant es un proyecto enfocado en crear una experiencia gastronómica única y memorable. El objetivo es diseñar y desarrollar un restaurante que ofrezca cocina, ambientación y atención excepcionales, garantizando una experiencia cómoda y agradable para sus visitantes. A través de principios de diseño innovadores, materiales de calidad y soluciones creativas, Restaura Restaurant busca construir una experiencia premium.",
        brandTitle: "Creando la marca",
        brandText:
            "La identidad de marca de Restaura Restaurant fue desarrollada para reflejar su compromiso con una experiencia gastronómica distintiva. El logotipo, la paleta de colores y la tipografía fueron elegidos cuidadosamente para transmitir elegancia, creatividad y modernidad. Al consolidar una marca fuerte y coherente, Restaura Restaurant busca comunicar de manera efectiva su misión y valores al público objetivo.",
        visualsTitle: "Diseñando lo visual",
        visualsText:
            "El diseño visual de Restaura Restaurant fue creado para transmitir elegancia y creatividad. El uso de esquemas de color sofisticados, imágenes de alta calidad y elementos modernos refuerza su enfoque en una experiencia gastronómica premium. Las visuales fueron pensadas para inspirar y conectar con la audiencia, motivándola a elegir Restaura Restaurant.",
    },
};

export default function Restaura({ lang = "en", onToggleLang }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

	return (
		<section className="project-page" id="restaura">
                    <div className="project-page__overlay" aria-hidden="true" />
                    <div className="project-page__content">
                        <div className="project-page__topbar">
                            <Link to="/" className="project-page__back">{copy.back}</Link>
                            <button
                                type="button"
                                className="project-page__lang-toggle"
                                onClick={onToggleLang}
                                aria-label={copy.toggleAria}
                                title={copy.toggleAria}
                            >
                                {copy.toggleLabel}
                            </button>
                        </div>
                        <h2>{copy.title}<br />{copy.subtitle}</h2>
                        <p>{copy.intro}</p>
        
                        <div className="project-page__images project-page__images--two">
                            <img src={logoRestaura} alt="Restaura Restaurant Logo" />
                            <img className="logo" src={logoRestaura2} alt="Variación de logo Restaura Restaurant" />
                        </div>
        
                        <h3>{copy.brandTitle}</h3>
                        <p>{copy.brandText}</p>
        
                        <div className="project-page__images project-page__images--three">
                            <img src={image} alt="Beneficios de Restaura Restaurant" />
                            <img src={image2} alt="Servicio de instalación Restaura Restaurant" />
                            <img src={image3} alt="Equipo de Restaura Restaurant" />
                        </div>
        
                        <h3>{copy.visualsTitle}</h3>
                        <p>{copy.visualsText}</p>
        
                        <div className="project-page__images project-page__images--stack">
                            <img src={page} alt="Vista previa 1 del sitio Restaura Restaurant" />
                            <img src={page2} alt="Vista previa 2 del sitio Restaura Restaurant" />
                        </div>
        
                        <ProjectGallery currentProject="restaura" lang={lang} />
                    </div>
                </section>
	);
}
