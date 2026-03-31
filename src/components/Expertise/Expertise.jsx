import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./Expertise.css";

const copyByLang = {
    en: {
        title: "Expertise",
        cards: [
            {
                title: "Frontend Dev",
                subtitle: "React, NextJs",
                description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
            },
            {
                title: "Backend Dev",
                subtitle: "Node.js, Express",
                description: "Experienced in building robust backend systems using Node.js and Express. Skilled in API development and database management.",
            },
            {
                title: "Responsive",
                subtitle: "website",
                description: "Creating responsive and visually appealing websites that adapt seamlessly to different devices and screen sizes.",
            },
        ],
        htmlLang: "en",
        helpText: "How can I help you?",
        htmlCode: {
            titleText: "Full Stack Developer",
            paragraphLine1: "This is a dummy text with",
            spanText: "some span",
            paragraphLine2: "Oops, I almost forgot to say Hello World!",
        },
    },
    es: {
        title: "Experiencia",
        cards: [
            {
                title: "Desarrollo Frontend",
                subtitle: "React, NextJs",
                description: "Apasionada por UI/UX. Más de 5 años de experiencia desarrollando con HTML, CSS, JS, React y NextJS.",
            },
            {
                title: "Desarrollo Backend",
                subtitle: "Node.js, Express",
                description: "Experiencia construyendo sistemas backend robustos con Node.js y Express. Dominio de desarrollo de APIs y gestión de bases de datos.",
            },
            {
                title: "Sitios Responsive",
                subtitle: "web",
                description: "Creación de sitios web responsivos y atractivos que se adaptan sin problemas a distintos dispositivos y tamaños de pantalla.",
            },
        ],
        htmlLang: "es",
        helpText: "¿Cómo puedo ayudarte?",
        htmlCode: {
            titleText: "Desarrolladora Full Stack",
            paragraphLine1: "Este es un texto de ejemplo con",
            spanText: "un span",
            paragraphLine2: "Ups, casi me olvido de decir ¡Hola Mundo!",
        },
    },
};

export default function Expertise({ lang = "en" }) {
    const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <section className="expertise" id="expertise">

            <h2>{copy.title}</h2>
            <div className="expertise__cards">
            <div className="expertise__content">
                <div className="expertise__heading">
                    <div className="expertise__icon-col">
                        <FontAwesomeIcon icon={faReact} className="expertise__icon" aria-hidden="true" />
                    </div>
                    <div className="expertise__info">
                        <h2>{copy.cards[0].title}</h2>
                        <h3>{copy.cards[0].subtitle}</h3>
                    </div>
                </div>
                <p className="expertise__code-tag">&lt;h3&gt;</p>
                <p className="expertise__text">{copy.cards[0].description}</p>
                <p className="expertise__code-tag">&lt;/h3&gt;</p>
            </div>
           <div className="expertise__content">
                <div className="expertise__heading">
                    <div className="expertise__icon-col">
                        <FontAwesomeIcon icon={faComputer} className="expertise__icon" aria-hidden="true" />
                    </div>
                    <div className="expertise__info">
                        <h2>{copy.cards[1].title}</h2>
                        <h3>{copy.cards[1].subtitle}</h3>
                    </div>
                </div>
                <p className="expertise__code-tag">&lt;h3&gt;</p>
                <p className="expertise__text">{copy.cards[1].description}</p>
                <p className="expertise__code-tag">&lt;/h3&gt;</p>
            </div>
            <div className="expertise__content">
                <div className="expertise__heading">
                    <div className="expertise__icon-col">
                        <FontAwesomeIcon icon={faMobileScreen} className="expertise__icon" aria-hidden="true" />
                    </div>
                    <div className="expertise__info">
                        <h2>{copy.cards[2].title}</h2>
                        <h3>{copy.cards[2].subtitle}</h3>
                    </div>
                </div>
                <p className="expertise__code-tag">&lt;h3&gt;</p>
                <p className="expertise__text">{copy.cards[2].description}</p>
                <p className="expertise__code-tag">&lt;/h3&gt;</p>
            </div>
            </div>

            <div className="html-code-wrap">
           <div class="html-code" aria-label="Código HTML simulado">
                <span class="line"><span class="sym">&lt;</span><span class="name">!DOCTYPE</span><span class="green"> html</span><span class="sym">&gt;</span></span>

                <span class="line"><span class="sym">&lt;</span><span class="name">html</span><span class="green"> lang</span><span class="white">=</span><span class="yellow">{`"${copy.htmlLang}"`}</span><span class="sym">&gt;</span></span>

                <span class="line i1"><span class="sym">&lt;</span><span class="name">head</span><span class="sym">&gt;</span></span>
                <span class="line i2"><span class="sym">&lt;</span><span class="name">title</span><span class="sym">&gt;</span></span>
                <span class="line i3 text">{copy.htmlCode.titleText}</span>
                <span class="line i2"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">title</span><span class="sym">&gt;</span></span>
                <span class="line i1"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">head</span><span class="sym">&gt;</span></span>

                <span class="line i1"><span class="sym">&lt;</span><span class="name">body</span><span class="sym">&gt;</span></span>
                <span class="line i2"><span class="sym">&lt;</span><span class="name">h1</span><span class="sym">&gt;</span></span>
                    <span class="line i3 text">{copy.helpText}</span>
                <span class="line i2"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">h1</span><span class="sym">&gt;</span></span>

                <span class="line i2"><span class="sym">&lt;</span><span class="name">p</span><span class="sym">&gt;</span></span>
                <span class="line i3 text">{copy.htmlCode.paragraphLine1}</span>
                <span class="line i3"><span class="sym">&lt;</span><span class="name">span</span><span class="sym">&gt;</span></span>
                <span class="line i3 text">{copy.htmlCode.spanText}</span>
                <span class="line i3"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">span</span><span class="sym">&gt;</span></span>
                <span class="line i3 text">{copy.htmlCode.paragraphLine2}</span>
                <span class="line i2"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">p</span><span class="sym">&gt;</span></span>
                <span class="line i1"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">body</span><span class="sym">&gt;</span></span>

                <span class="line"><span class="sym">&lt;</span><span class="slash">/</span><span class="name">html</span><span class="sym">&gt;</span></span>
</div>
</div>


        </section>
    );
}