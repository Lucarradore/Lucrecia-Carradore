import "./About.css";

const copyByLang = {
  en: {
    title: "Hey there!",
    paragraphs: [
      "I’m a frontend engineer with a specialty in web accessibility, focused on building pixel-perfect, intuitive user interfaces. I enjoy working at the intersection of design and engineering, where great user experience meets robust, clean, and scalable code.",
      "Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture.",
      "Previously, I’ve worked across a wide range of environments, from product studios to startups and large tech companies, including Apple, Starry Internet, and Upstatement. Alongside my professional work, I also created an online video course a few years ago which walks through building a real-world, API-driven application from scratch. These experiences have shaped how I think about building products that are both well-crafted and widely usable.",
      "Outside of work, you can usually find me climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds Korok",
    ],
  },
  es: {
    title: "¡Hola!",
    paragraphs: [
      "Soy desarrolladora frontend, especializada en accesibilidad web y enfocada en crear interfaces intuitivas y cuidadas al detalle. Disfruto trabajar en la intersección entre diseño e ingeniería, donde una gran experiencia de usuario se combina con código limpio, robusto y escalable.",
      "Actualmente soy senior frontend engineer en Klaviyo, dentro del equipo de librería de componentes, ayudando a mantener y evolucionar nuestro sistema de diseño. En este rol lidero iniciativas de accesibilidad en componentes, tooling y patrones, trabajando muy de cerca con diseñadores e ingenieros.",
      "Antes trabajé en distintos entornos, desde estudios de producto hasta startups y grandes empresas tecnológicas, incluyendo Apple, Starry Internet y Upstatement. También creé un curso online donde muestro cómo construir desde cero una aplicación real impulsada por APIs. Todo eso moldeó mi forma de crear productos bien hechos y realmente usables.",
      "Fuera del trabajo, me vas a encontrar escalando, jugando al tenis, compartiendo tiempo con mi esposa y mis dos gatos, o recorriendo Hyrule en busca de semillas Korok.",
    ],
  },
};

export default function About({ lang = "en" }) {
  const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <section className="about bg-sky-about" id="about">
            <div className="about__content">

            <div className="wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                    <linearGradient id="waveBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff47ce" />
                        <stop offset="50%" stopColor="#4cc9f0" />
                        <stop offset="100%" stopColor="#b5179e" />
                    </linearGradient>
                    </defs>

                    {/* Relleno */}
                    <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
                        82.39-16.72,168.19-17.73,250.45-.39
                        C823.78,31,906.67,72,985.66,92.83
                        c70.05,18.48,146.53,26.09,214.34,3
                        V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill="#000b1e"
                    />

                    {/* Borde degradado */}
                    <path
                    d="M0,27.35
                        A600.21,600.21,0,0,0,321.39,56.44
                        c58-10.79,114.16-30.13,172-41.86
                        82.39-16.72,168.19-17.73,250.45-.39
                        C823.78,31,906.67,72,985.66,92.83
                        c70.05,18.48,146.53,26.09,214.34,3"
                    stroke="url(#waveBorderGradient)"
                    strokeWidth="3"
                    fill="none"
                    />
                </svg>
            </div>

                <div className="about__info">
                  <h2>{copy.title}</h2>
                
                <div className="about__p">
                {copy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                </div>
                </div>

                <div className="wave-button">
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
    <defs>
      <linearGradient id="waveBorderGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff7edb" />
        <stop offset="50%" stopColor="#6ddcff" />
        <stop offset="100%" stopColor="#c77dff" />
      </linearGradient>
    </defs>

    {/* Relleno invertido */}
    <path
      d="M0,120
         V92.65
         A600.21,600.21,0,0,1,321.39,63.56
         c58,10.79,114.16,30.13,172,41.86
         82.39,16.72,168.19,17.73,250.45.39
         C823.78,89,906.67,48,985.66,27.17
         c70.05-18.48,146.53-26.09,214.34-3
         V120
         Z"
      fill="#081a3a"
    />

    {/* Borde degradado invertido */}
    <path
      d="M0,92.65
         A600.21,600.21,0,0,1,321.39,63.56
         c58,10.79,114.16,30.13,172,41.86
         82.39,16.72,168.19,17.73,250.45.39
         C823.78,89,906.67,48,985.66,27.17
         c70.05-18.48,146.53-26.09,214.34-3"
      stroke="url(#waveBorderGradientBottom)"
      strokeWidth="3"
      fill="transparent"
    />
  </svg>
</div>

            </div>
        </section>
    );
}