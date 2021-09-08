import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
function App() {
    return(
    <div className="Portofolio">
      <Navbar />
      <Home/>
      <AboutMe/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    );
}

export default App;
