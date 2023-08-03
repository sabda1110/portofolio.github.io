import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifikasi from './components/qualifikasi/Qualifikasi';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifikasi />
        <Contact />
      </main>
    </>
  );
};

export default App;
