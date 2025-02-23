
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Cards from "./components/cards";
import ConsultingSection from "./components/yashi2";
import Hero from "./components/yashi1";
import ServicesSection from "./components/taniya1";
import AnimatedTechStack from "./components/sahil";
import FeaturesSection from "./components/ksitij";
// import Footer from "./components/footer";
import ProcessTimeline from "./components/anamika1";
import TestimonialSection from "./components/anamika2";


function App() {
  return (
    <div >
      <Navbar />

      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
        <ServicesSection />
      </div>
      <Hero />
      <ConsultingSection />
      <AnimatedTechStack />
      <FeaturesSection />

    </div>

  );
}

export default App;
