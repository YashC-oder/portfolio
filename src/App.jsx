import { useRef } from 'react';
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/SkillCard/Skills';
import Contacts from './components/Contacts/Contacts';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);
  
  return (
    <>
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactsRef={contactsRef}
      />
      <div ref={homeRef}><Hero/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={projectsRef}><Projects/></div>
      <div ref={skillsRef}><Skills/></div>
      <div ref={contactsRef}><Contacts/></div>
    </>
  );
}

export default App;
