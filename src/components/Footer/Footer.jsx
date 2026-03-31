import "./Footer.css";

const Patente = "/patente.png";

const copyByLang = {
	en: {
		links: ["Messenger", "LinkedIn", "Instagram", "GitHub"],
		copyright: "© 2025 Lucrecia Carradore. All rights reserved.",
	},
	es: {
		links: ["Messenger", "LinkedIn", "Instagram", "GitHub"],
		copyright: "© 2025 Lucrecia Carradore. Todos los derechos reservados.",
	},
};

const socialLinks = {
    messenger: "https://wa.me/3825448804",
    linkedin: "https://www.linkedin.com/in/lucrecia-carradore-4b053022b/",
    instagram: "#",
    github: "https://github.com/Lucarradore",
};



export default function Footer({ lang = "en" }) {
	const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer-links">
                    <a href={socialLinks.messenger} target="_blank" rel="noopener noreferrer">{copy.links[0]}</a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">{copy.links[1]}</a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">{copy.links[2]}</a>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">{copy.links[3]}</a>
                </div>
                <p>{copy.copyright}</p>
            </div>
                <img src={Patente} alt="Decorative pattern" className="footer__pattern" aria-hidden="true" loading="lazy" decoding="async" fetchPriority="low" />
        </footer>
    );
}