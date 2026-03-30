import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import scrollHintVideo from "/video/videohero.mp4";


import "./Hero.css";

const copyByLang = {
	en: {
		subtitle: "FULL STACK DEVELOPER",
		scrollAria: "Scroll smoothly to Expertise section",
		scrollTitle: "Go to Expertise",
	},
	es: {
		subtitle: "DESARROLLADORA FULL STACK",
		scrollAria: "Desplazarse suavemente a la sección Experiencia",
		scrollTitle: "Ir a Experiencia",
	},
};

export default function Hero({ lang = "en" }) {
	const [scrollDownHintAnimation, setScrollDownHintAnimation] = useState(null);
	const copy = copyByLang[lang] ?? copyByLang.en;

	useEffect(() => {
		let isMounted = true;

		fetch("/animation/Scroll down hint.json")
			.then((response) => response.json())
			.then((data) => {
				if (isMounted) {
					setScrollDownHintAnimation(data);
				}
			})
			.catch(() => {
				if (isMounted) {
					setScrollDownHintAnimation(null);
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	const handleScrollToExpertise = () => {
		const expertiseSection = document.querySelector("#expertise");
		if (!expertiseSection) return;

		expertiseSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		   <section className="hero" id="home" style={{position: 'relative', overflow: 'hidden'}}>
			   <div className="hero__bg-video-wrapper">
				   <video
					   className="hero__bg-video"
					   src={scrollHintVideo}
					   autoPlay
					   loop
					   muted
					   playsInline
				   />
			   </div>
			   <div className="social-hero">
				   <FontAwesomeIcon icon={faFacebookMessenger} />
				   <FontAwesomeIcon icon={faLinkedin} />
				   <FontAwesomeIcon icon={faInstagram} />
				   <FontAwesomeIcon icon={faGithub} />
			   </div>
			   <div className="hero__content">
				   <h1>LUCRECIA CARRADORE</h1>
				   <p>{copy.subtitle}</p>
			   </div>
			   <button
				   type="button"
				   className="hero__scroll-hint"
				   onClick={handleScrollToExpertise}
				   aria-label={copy.scrollAria}
				   title={copy.scrollTitle}
				   style={{
					   position: 'absolute',
					   left: '50%',
					   bottom: '2.5rem',
					   transform: 'translateX(-50%)',
					   background: 'none',
					   border: 'none',
					   zIndex: 3,
					   cursor: 'pointer',
					   padding: 0
				   }}
			   >
				   {scrollDownHintAnimation ? (
					   <Lottie
						   className="hero__scroll-hint-lottie"
						   animationData={scrollDownHintAnimation}
						   loop={true}
					   />
				   ) : (
					   <span className="hero__scroll-hint-fallback" aria-hidden="true">↓</span>
				   )}
			   </button>
		   </section>
	);
}
