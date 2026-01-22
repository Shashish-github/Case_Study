import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Quests from './components/Quests';
import EpicQuests from './components/EpicQuests';
import AIAssistant from './components/AIAssistant';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AuroraBackground from './components/AuroraBackground';

function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Quests />
      <EpicQuests />
      <AIAssistant />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
