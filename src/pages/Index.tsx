
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import AnimatedPage from '../components/AnimatedPage';

const Index = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Index;
