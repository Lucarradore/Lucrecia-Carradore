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



export default function Footer({ lang = "en" }) {
	const copy = copyByLang[lang] ?? copyByLang.en;

    return (
        <footer className="footer">
            <div className="footer__content">

                <p>{copy.copyright}</p>
            </div>
                <img src={Patente} alt="Decorative pattern" className="footer__pattern" aria-hidden="true" loading="lazy" decoding="async" fetchPriority="low" />
        </footer>
    );
}