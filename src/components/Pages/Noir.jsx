import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import logoNoir from "../../assets/images/Noir/logo-noir.png";
import logoNoir2 from "../../assets/images/Noir/logo-noir2.png";
import image from "../../assets/images/Noir/image-noir1.png";
import noirpage from "../../assets/images/Noir/noirpage1.png";
import noirpage2 from "../../assets/images/Noir/noirpage2.png";
import "./Pages.css";

const copyByLang = {
    en: {
        back: "← Back to home",
        toggleAria: "Switch language to Spanish",
        toggleLabel: "ES",
        title: "Noir Shop",
        subtitle: "Website development & design",
        intro:
            "Noir Shop is a project focused on creating a unique and stylish shopping experience. The project aims to design and build a store that offers exceptional products, ambiance, and service while ensuring a comfortable and enjoyable experience for customers. By incorporating innovative design principles, high-quality materials, and creative solutions, Noir Shop strives to contribute to a premium shopping experience.",
        brandTitle: "Creating the brand",
        brandText:
            "The brand identity for Noir Shop was developed to reflect the project's commitment to providing a unique and stylish shopping experience. The logo, color palette, and typography were carefully chosen to convey a sense of elegance, creativity, and modernity. By establishing a strong and cohesive brand, Noir Shop aims to effectively communicate its mission and values to the target audience.",
        visualsTitle: "Designing the visuals",
        visualsText:
            "The visual design of Noir Shop was created to evoke a sense of elegance and style. The use of sophisticated color schemes, high-quality imagery, and modern design elements helps to reinforce the project's focus on providing a premium shopping experience. The visuals were crafted to inspire and engage the audience, encouraging them to consider Noir Shop as a top choice for their shopping needs.",
    },
    es: {
        back: "← Volver al inicio",
        toggleAria: "Cambiar idioma a inglés",
        toggleLabel: "EN",
        title: "Noir Shop",
        subtitle: "Desarrollo y diseño web",
        intro:
            "Noir Shop es un proyecto orientado a crear una experiencia de compra única y con estilo. El objetivo es diseñar y desarrollar una tienda que ofrezca productos, ambientación y servicio excepcionales, garantizando una experiencia cómoda y atractiva para sus clientes. Mediante principios de diseño innovadores, materiales de alta calidad y soluciones creativas, Noir Shop busca construir una experiencia premium de compra.",
        brandTitle: "Creando la marca",
        brandText:
            "La identidad de marca de Noir Shop fue desarrollada para reflejar su compromiso con una experiencia de compra distinta y elegante. El logotipo, la paleta de colores y la tipografía fueron seleccionados cuidadosamente para transmitir elegancia, creatividad y modernidad. Al crear una marca fuerte y coherente, Noir Shop busca comunicar de manera efectiva su misión y valores al público objetivo.",
        visualsTitle: "Diseñando lo visual",
        visualsText:
            "El diseño visual de Noir Shop fue creado para transmitir estilo y sofisticación. El uso de esquemas de color refinados, imágenes de calidad y elementos modernos refuerza su enfoque en una experiencia de compra premium. Las visuales fueron pensadas para inspirar y conectar con la audiencia, motivándola a elegir Noir Shop.",
    },
};

export default function Noir({ lang = "en", onToggleLang }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

	return (
        <section className="project-page" id="noir">
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
                                    <img src={logoNoir} alt="Noir Shop Logo" />
                                    <img className="logo" src={logoNoir2} alt="Variación de logo Noir Shop" />
                                </div>
                
                                <h3>{copy.brandTitle}</h3>
                                <p>{copy.brandText}</p>
                
                                <div className="project-page__images project-page__images--three">
                                    <img src={image} alt="Beneficios de Noir Shop" />
                                </div>
                
                                <h3>{copy.visualsTitle}</h3>
                                <p>{copy.visualsText}</p>
                
                                <div className="project-page__images project-page__images--stack">
                                    <img src={noirpage} alt="Vista previa 1 del sitio GreenHome Sustentable" />
                                    <img src={noirpage2} alt="Vista previa 2 del sitio GreenHome Sustentable" />
                                </div>
                
                                <ProjectGallery currentProject="noir" lang={lang} />
                            </div>
                        </section>
	);
}
