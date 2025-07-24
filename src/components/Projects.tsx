
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SERV GENIE | AI Chatbot",
      subtitle: "Web + Mobile",
      description: "Cross-platform AI chatbot interface using Flutter (Mobile) and React (Web) to assist users with tractor-related issues. Integrated with backend AI engine for intelligent suggestions and FAQs.",
      technologies: ["Flutter", "React", "AI Integration", "REST APIs"],
      features: [
        "Cross-platform compatibility (Web & Mobile)",
        "AI-powered intelligent suggestions",
        "Responsive layouts with smooth animations",
        "Consistent design across devices"
      ],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "STOCK AUDITING SYSTEM",
      subtitle: "Real Time scanning and stock management",
      description: "Custom Flutter app optimized for Android barcode scanning devices with native hardware support. Designed for warehouse staff with intuitive UI, reducing stock verification time by 35%.",
      technologies: ["Flutter", "Android", "Barcode Scanning", "Offline Storage"],
      features: [
        "Native Android barcode scanner integration",
        "Offline-first architecture with local caching",
        "35% reduction in stock verification time",
        "Real-time sync with REST APIs"
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "SUPPLIER SCHEME SUGGEST",
      subtitle: "Suggestion Portal for EKL supplier and buyer",
      description: "Responsive suggestion management portal using Flutter for mobile and React for Web. Implemented dynamic forms and real-time status tracking, improving internal process efficiency by 40%.",
      technologies: ["Flutter", "React", "Firebase", "Real-time Updates"],
      features: [
        "Cross-platform responsive design",
        "Dynamic forms and status tracking",
        "40% improvement in process efficiency",
        "Firebase Cloud Messaging integration"
      ],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-border">
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">{project.subtitle}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                    <ExternalLink size={16} />
                    View Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg hover:bg-muted transition-colors text-sm">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
