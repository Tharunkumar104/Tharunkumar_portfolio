import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Achievements } from '../components/Achievements/Achievements';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
