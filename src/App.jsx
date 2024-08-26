import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMeButton from "./components/ContactMeButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <HireMe />
      <ContactMeButton />
      <Footer />
    </>
  );
}

export default App;
