import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

