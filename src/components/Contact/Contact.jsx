import "./Contact.css";



const copyByLang = {
    en: {
        chatLabel: "Hi! Chat with me",
        title: "Available for select freelance opportunities",
        description: "Have an exciting project you need help with? Send me an email or contact me via instant message!",
        services: [
            {
                title: "Landing Page",
                description:
                    "Creating visually appealing and responsive landing pages that effectively communicate your brand's message and drive conversions.",
            },
            {
                title: "Institutional Website",
                description:
                    "Designing and developing institutional websites that provide a professional online presence for organizations, showcasing their mission, values, and services.",
            },
            {
                title: "E-commerce",
                description:
                    "Building robust and user-friendly e-commerce platforms that enable businesses to sell their products and services online, providing a seamless shopping experience for customers.",
            },
        ],
        cta: "Get your price",
    },
    es: {
        chatLabel: "¡Hola! Chateá conmigo",
        title: "Disponible para oportunidades freelance selectas",
        description: "¿Tenés un proyecto emocionante y necesitás ayuda? ¡Enviame un email o contactame por mensajería instantánea!",
        services: [
            {
                title: "Landing Page",
                description:
                    "Creación de landing pages atractivas y responsivas que comunican el mensaje de tu marca de forma efectiva y mejoran la conversión.",
            },
            {
                title: "Sitio Institucional",
                description:
                    "Diseño y desarrollo de sitios institucionales que brindan una presencia profesional online para organizaciones, mostrando su misión, valores y servicios.",
            },
            {
                title: "E-commerce",
                description:
                    "Construcción de plataformas de e-commerce sólidas y fáciles de usar para vender productos y servicios online con una experiencia de compra fluida.",
            },
        ],
        cta: "Pedí tu presupuesto",
    },
};

export default function Contact({ lang = "en" }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <section className="contact" id="contact">
            <div className="contact__overlay" aria-hidden="true" />



            <div className="contact__content">
                <h2>{copy.title}</h2>
                <p>{copy.description}</p>

                <div className="services">
                    <div className="service">
                        <h3>
                            {copy.services[0].title}
                        </h3>
                        <p>{copy.services[0].description}</p>
                    </div>
                    <div className="service">
                        <h3>
                            {copy.services[1].title}
                        </h3>
                        <p>{copy.services[1].description}</p>
                    </div>
                    <div className="service">
                        <h3>
                            {copy.services[2].title}
                        </h3>
                        <p>{copy.services[2].description}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}