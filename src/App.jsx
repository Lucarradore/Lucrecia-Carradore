import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GreenHome from "./components/Pages/GreenHome";
import Hotel from "./components/Pages/Hotel";
import Noir from "./components/Pages/Noir";
import Restaura from "./components/Pages/Restaura";
import ProjectPage from "./components/Projects/ProjectPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selectors = [
      ".hero__content",
      ".social-hero",
      ".expertise > h2",
      ".expertise__content",
      ".html-code-wrap",
      ".projects__content",
      ".home-card",
      ".about__info",
      ".contact__content",
      ".service",
      ".footer__content",
      ".project-page__topbar",
      ".project-page__content > h2",
      ".project-page__content > p",
      ".project-page__content > h3",
      ".project-page__images",
      ".card-galery h4",
      ".galery",
    ];

    const elements = [...new Set(selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector))))];

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.classList.remove("is-visible");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 60}ms`);
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function HomePage({ lang, onToggleLang }) {
  return (
    <main className="app">
      <Navbar lang={lang} onToggleLang={onToggleLang} />
      <Hero lang={lang} />
      <Expertise lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}

function App() {
  const [lang, setLang] = useState("en");

  const handleToggleLang = () => {
    setLang((currentLang) => (currentLang === "en" ? "es" : "en"));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollReveal />
      <Routes>
        <Route path="/" element={<HomePage lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/projects/greenhome" element={<GreenHome lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/projects/restaura" element={<Restaura lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/projects/noir" element={<Noir lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/projects/hotel" element={<Hotel lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/projectpage" element={<ProjectPage project="greenhome" />} />
        <Route path="*" element={<HomePage lang={lang} onToggleLang={handleToggleLang} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

