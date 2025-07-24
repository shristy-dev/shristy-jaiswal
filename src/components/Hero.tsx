import React from "react";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">Shristy Jaiswal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in">
              Mobile App Developer & Frontend Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Frontend Developer with 1 year of experience building responsive,
              cross-platform web and mobile applications. Specializing in
              Flutter and React with a focus on clean code and exceptional user
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-card shadow-2xl animate-scale-in">
                <img
                  src="/images/d1863c15-0723-4827-97b7-130740cc04d1.png"
                  alt="Shristy Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                1+
                <br />
                Years
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
