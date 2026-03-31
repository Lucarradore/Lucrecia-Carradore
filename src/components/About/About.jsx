import "./About.css";

const copyByLang = {
  en: {
    title: "Hey there!",
    paragraphs: [
      "I'm Lucrecia",
      "I'm a Full Stack Web Developer with a strong focus on both frontend and backend development. I'm passionate about building digital experiences that are not only functional but also visually appealing and well-structured.",
      "I began my journey in web development in 2021, studying at NUCBA, where I built a solid foundation in modern web technologies. I graduated in 2024 and I'm currently continuing my education at the National University of Chilecito (UNdeC), pursuing a degree in Web Application Development.",  
      "Throughout my learning process, I’ve worked on collaborative projects alongside developers and designers. In these projects, I contributed to layout development, interface structuring, and pre-development wireframing. These experiences helped me strengthen essential skills such as teamwork, communication, and project planning from the ground up.",
      "I specialize in technologies like HTML, CSS, JavaScript, and React, applying best practices, responsive design, and modern frontend tools. I also have backend knowledge, which allows me to approach projects with a comprehensive and well-rounded perspective.",
      "Currently, I’m focusing my career on freelance work, aiming to continue growing professionally, take on new challenges, and help businesses and entrepreneurs bring their ideas to life in the digital world.",
    ],
  },
  es: {
    title: "¡Hola!",
    paragraphs: [
      "Soy Lucrecia",
      "Soy desarrolladora web Full Stack, con enfoque tanto en frontend como en backend. Me apasiona crear experiencias digitales funcionales, atractivas y bien estructuradas, cuidando tanto la lógica como el diseño.",
      "Inicié mi camino en el desarrollo web en 2021, formándome en NUCBA, donde adquirí bases sólidas en tecnologías modernas. En 2024 finalicé esa etapa y actualmente continúo ampliando mis conocimientos en la Universidad Nacional de Chilecito (UNdeC), cursando la carrera de Desarrollo de Aplicaciones Web (TUDAW).",
      "A lo largo de mi formación, he participado en distintos proyectos colaborativos junto a desarrolladores y diseñadores, donde trabajé en la maquetación, organización de interfaces y creación de bocetos previos al desarrollo. Estas experiencias me permitieron fortalecer habilidades clave como el trabajo en equipo, la comunicación y la planificación de productos digitales desde cero.",
      "Me especializo en tecnologías como HTML, CSS, JavaScript y React, aplicando buenas prácticas, diseño responsive y herramientas modernas del ecosistema frontend. También cuento con conocimientos en lógica de programación y desarrollo backend, lo que me permite tener una visión integral de cada proyecto.",
      "Actualmente, estoy enfocando mi carrera hacia el trabajo freelance, con el objetivo de seguir creciendo profesionalmente, enfrentar nuevos desafíos y ayudar a emprendedores y empresas a llevar sus ideas al mundo digital.",
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