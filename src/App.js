// src/App.js
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Experience } from './components/Experience.js';
import { Contact } from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <SpeedInsights/>
    </div>
  );
}

export default App;
