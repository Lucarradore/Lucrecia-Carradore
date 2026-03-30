import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import logoHotel from "../../assets/images/Hotel/logo-hotel.png";
import logoHotel2 from "../../assets/images/Hotel/logo-hotel2.png";
import image1 from "../../assets/images/Hotel/imagen-hotel1.jpg";
import image2 from "../../assets/images/Hotel/image-hotel2.jpg";
import image3 from "../../assets/images/Hotel/image-hotel3.jpg";
import pagina from "../../assets/images/Hotel/pagina-hotel.png";
import "./Pages.css";

const copyByLang = {
    en: {
        back: "← Back to home",
        toggleAria: "Switch language to Spanish",
        toggleLabel: "ES",
        title: "Hotel Resort",
        subtitle: "Website development & design",
        intro:
            "Hotel is a project focused on providing luxurious and comfortable accommodations. The project aims to design and build hotels that offer exceptional service and amenities while ensuring a memorable experience for guests. By incorporating modern design principles, high-quality materials, and innovative solutions, Hotel strives to contribute to a premium hospitality experience.",
        brandTitle: "Creating the brand",
        brandText:
            "The brand identity for Hotel was developed to reflect the project's commitment to hospitality and luxury. The logo, color palette, and typography were carefully chosen to convey a sense of elegance, comfort, and modernity. By establishing a strong and cohesive brand, Hotel aims to effectively communicate its mission and values to the target audience.",
        visualsTitle: "Designing the visuals",
        visualsText:
            "The visual design of Hotel was created to evoke a sense of elegance and luxury. The use of sophisticated color schemes, high-quality imagery, and modern design elements helps to reinforce the project's focus on providing a premium hospitality experience. The visuals were crafted to inspire and engage the audience, encouraging them to consider Hotel as a top choice for their accommodation needs.",
    },
    es: {
        back: "← Volver al inicio",
        toggleAria: "Cambiar idioma a inglés",
        toggleLabel: "EN",
        title: "Hotel Resort",
        subtitle: "Desarrollo y diseño web",
        intro:
            "Hotel es un proyecto enfocado en ofrecer alojamientos lujosos y confortables. Busca diseñar y desarrollar hoteles que brinden un servicio excepcional y comodidades de calidad, garantizando una experiencia memorable para los huéspedes. A través de principios de diseño modernos, materiales de alta calidad y soluciones innovadoras, Hotel apunta a construir una experiencia de hospitalidad premium.",
        brandTitle: "Creando la marca",
        brandText:
            "La identidad de marca de Hotel fue desarrollada para reflejar su compromiso con la hospitalidad y el lujo. El logotipo, la paleta de colores y la tipografía fueron elegidos cuidadosamente para transmitir elegancia, confort y modernidad. Al construir una marca sólida y coherente, Hotel busca comunicar de forma efectiva su misión y valores al público objetivo.",
        visualsTitle: "Diseñando lo visual",
        visualsText:
            "El diseño visual de Hotel fue creado para transmitir elegancia y lujo. El uso de esquemas de color sofisticados, imágenes de alta calidad y elementos modernos refuerza el enfoque del proyecto en una experiencia hotelera premium. Las visuales fueron diseñadas para inspirar y conectar con la audiencia, motivándola a elegir Hotel como su mejor opción de alojamiento.",
    },
};

export default function Hotel({ lang = "en", onToggleLang }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

	return (
        <section className="project-page" id="hotel">
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
                    <img src={logoHotel} alt="Hotel Logo" />
                    <img className="logo" src={logoHotel2} alt="Variación de logo Hotel" />
                </div>

                <h3>{copy.brandTitle}</h3>
                <p>{copy.brandText}</p>

                <div className="project-page__images project-page__images--three">
                    <img src={image2} alt="Servicio del Hotel" />
                    <img src={image3} alt="Equipo del Hotel" />
                    <img src={image1} alt="Beneficios del Hotel" />
                </div>

                <h3>{copy.visualsTitle}</h3>
                <p>{copy.visualsText}</p>

                <div className="project-page__images project-page__images--stack">
                    <img src={pagina} alt="Vista previa del sitio Hotel" />
                </div>

                <ProjectGallery currentProject="hotel" lang={lang} />
            </div>
        </section>
	);
}
