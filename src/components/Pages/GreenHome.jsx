import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import "./Pages.css";
import logoGreenHouse from "../../assets/images/GreenHouse/logoGreenHouse.png";
import logoGreenHouse2 from "../../assets/images/GreenHouse/logoGreen.png";
import benefitImage from "../../assets/images/GreenHouse/benefit4.jpg";
import installationImage from "../../assets/images/GreenHouse/service-installation.jpg";
import usImage from "../../assets/images/GreenHouse/us3.jpg";
import pagina1 from "../../assets/images/GreenHouse/Pagina1.png";
import pagina2 from "../../assets/images/GreenHouse/Pagina2.png";
import pagina3 from "../../assets/images/GreenHouse/Pagina3.png";

const copyByLang = {
    en: {
        back: "← Back to home",
        toggleAria: "Switch language to Spanish",
        toggleLabel: "ES",
        title: "GreenHome Sustentable",
        subtitle: "Website development & design",
        intro:
            "GreenHome Sustentable is a project focused on creating sustainable and eco-friendly housing solutions. The project aims to design and build homes that minimize environmental impact while maximizing energy efficiency and comfort for residents. By incorporating renewable energy sources, sustainable materials, and innovative design principles, GreenHome Sustentable strives to contribute to a greener future and promote sustainable living practices.",
        brandTitle: "Creating the brand",
        brandText:
            "The brand identity for GreenHome Sustentable was developed to reflect the project's commitment to sustainability and eco-friendly living. The logo, color palette, and typography were carefully chosen to convey a sense of environmental responsibility, innovation, and modernity. By establishing a strong and cohesive brand, GreenHome Sustentable aims to effectively communicate its mission and values to the target audience.",
        visualsTitle: "Designing the visuals",
        visualsText:
            "The visual design of GreenHome Sustentable was created to evoke a sense of harmony with nature and promote sustainable living. The use of earthy tones, natural textures, and organic shapes in the design elements helps to reinforce the project's focus on eco-friendly housing solutions. The visuals were crafted to inspire and engage the audience, encouraging them to embrace sustainable practices and consider GreenHome Sustentable as a viable option for their housing needs.",
    },
    es: {
        back: "← Volver al inicio",
        toggleAria: "Cambiar idioma a inglés",
        toggleLabel: "EN",
        title: "GreenHome Sustentable",
        subtitle: "Desarrollo y diseño web",
        intro:
            "GreenHome Sustentable es un proyecto enfocado en crear soluciones de vivienda sustentables y ecológicas. El objetivo es diseñar y construir hogares que minimicen el impacto ambiental mientras maximizan la eficiencia energética y el confort de sus habitantes. Al incorporar energías renovables, materiales sostenibles y principios de diseño innovadores, GreenHome Sustentable busca contribuir a un futuro más verde y promover prácticas de vida sostenibles.",
        brandTitle: "Creando la marca",
        brandText:
            "La identidad de marca de GreenHome Sustentable fue desarrollada para reflejar su compromiso con la sustentabilidad y la vida ecológica. El logotipo, la paleta de colores y la tipografía fueron elegidos cuidadosamente para transmitir responsabilidad ambiental, innovación y modernidad. Al establecer una marca sólida y coherente, GreenHome Sustentable busca comunicar de forma efectiva su misión y valores al público objetivo.",
        visualsTitle: "Diseñando lo visual",
        visualsText:
            "El diseño visual de GreenHome Sustentable fue creado para evocar armonía con la naturaleza y promover un estilo de vida sustentable. El uso de tonos tierra, texturas naturales y formas orgánicas refuerza el enfoque del proyecto en soluciones habitacionales ecológicas. Las visuales fueron pensadas para inspirar y conectar con la audiencia, motivándola a adoptar prácticas sostenibles y a considerar GreenHome Sustentable como una opción viable.",
    },
};

export default function GreenHome({ lang = "en", onToggleLang }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <section className="project-page" id="greenhome">
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
                    <img src={logoGreenHouse} alt="GreenHome Sustentable Logo" />
                    <img className="logo" src={logoGreenHouse2} alt="Variación de logo GreenHome Sustentable" />
                </div>

                <h3>{copy.brandTitle}</h3>
                <p>{copy.brandText}</p>

                <div className="project-page__images project-page__images--three">
                    <img src={benefitImage} alt="Beneficios de GreenHome Sustentable" />
                    <img src={installationImage} alt="Servicio de instalación GreenHome" />
                    <img src={usImage} alt="Equipo de GreenHome Sustentable" />
                </div>

                <h3>{copy.visualsTitle}</h3>
                <p>{copy.visualsText}</p>

                <div className="project-page__images project-page__images--stack">
                    <img src={pagina1} alt="Vista previa 1 del sitio GreenHome Sustentable" />
                    <img src={pagina2} alt="Vista previa 2 del sitio GreenHome Sustentable" />
                    <img src={pagina3} alt="Vista previa 3 del sitio GreenHome Sustentable" />
                </div>

                <ProjectGallery currentProject="greenhome" lang={lang} />
            </div>
        </section>
    )
}

