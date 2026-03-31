import { useEffect, useState } from "react";
import "./Navbar.css";

const labelsByLang = {
	en: {
		links: [
			{ label: "// home", href: "#home" },
			{ label: "// about", href: "#about" },
			{ label: "// expertise", href: "#expertise" },
			{ label: "// projects", href: "#projects" },
			{ label: "// contact", href: "#contact" },
		],
		toggleLabel: "EN",
		toggleAria: "Switch language to Spanish",
	},
	es: {
		links: [
			{ label: "// inicio", href: "#home" },
			{ label: "// sobre mí", href: "#about" },
			{ label: "// experiencia", href: "#expertise" },
			{ label: "// proyectos", href: "#projects" },
			{ label: "// contacto", href: "#contact" },
		],
		toggleLabel: "ES",
		toggleAria: "Cambiar idioma a inglés",
	},
};

export default function Navbar({ lang = "en", onToggleLang }) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeHref, setActiveHref] = useState("#home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const currentLangLabels = labelsByLang[lang] ?? labelsByLang.en;

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth > 1024) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const handleNavClick = (event, href) => {
		if (!href?.startsWith("#")) return;

		event.preventDefault();
		const target = document.querySelector(href);
		if (!target) return;

		setActiveHref(href);
		setIsMenuOpen(false);

		target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${isMenuOpen ? "navbar--menu-open" : ""}`.trim()} aria-label="Main navigation">
			<a className="navbar__brand" href="#home" onClick={(event) => handleNavClick(event, "#home")}>
				LucreciaCarradore ._
			</a>

			<div className="navbar__center">
				

				<ul className="navbar__links" id="navbar-mobile-links">
					{currentLangLabels.links.map((link, index) => (
                        
						<li key={link.href} className={activeHref === link.href ? "active" : ""}>
                            <p>{`0${index + 1}`}</p>
							<a
								href={link.href}
								onClick={(event) => handleNavClick(event, link.href)}
								aria-current={activeHref === link.href ? "page" : undefined}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>

			<button
				type="button"
				className="navbar__lang-toggle"
				onClick={onToggleLang}
				aria-label={currentLangLabels.toggleAria}
				title={currentLangLabels.toggleAria}
			>
				{currentLangLabels.toggleLabel}
			</button>

			<button
				type="button"
				className="navbar__menu-toggle"
				onClick={() => setIsMenuOpen((open) => !open)}
				aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={isMenuOpen}
				aria-controls="navbar-mobile-links"
			>
				<span />
				<span />
				<span />
			</button>
		</nav>
	);
}
