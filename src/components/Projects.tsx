
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import { toast } from 'sonner';

const Projects = () => {
  const handleProjectClick = (url: string, e: React.MouseEvent) => {
    if (url === '#') {
      e.preventDefault();
      toast.info('Project Access Restricted', {
        description: 'This project is for internal use only and cannot be publicly accessed.',
        duration: 3000,
      });
    }
  };

  const handleCodeClick = (code: string, e: React.MouseEvent) => {
    if (code === '#') {
      e.preventDefault();
      toast.info('Private Repository', {
        description: 'This is a private repository. The code cannot be viewed publicly.',
        duration: 3000,
      });
    }
  };
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
      icon: <Smartphone className="w-6 h-6" />,
      image: "/images/serv_genie.webp",
      url: "https://play.google.com/store/apps/details?id=com.ekl.servgenie&hl=en",
      code : "#"
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
      icon: <Database className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      url: "#",
      code : "#"
    },
    {
      title: "Ekonnect Mobile Application",
      subtitle: "Application Suite for All EKL employees - Hub for HR, IT, Sales and Admin Services Requests",
      description: "Comprehensive employee portal built with Flutter, serving as a centralized hub for all EKL employees. Streamlines HR processes, IT support tickets, sales tools, and administrative service requests. Includes ESS (Employee Self-Service), attendance tracking, leave management, and real-time notifications for enhanced workplace productivity.",
      technologies: ["Flutter", "Android", "iOS", "Firebase", "REST APIs", "Push Notifications"],
      features: [
        "Employee Self-Service (ESS) for HR operations",
        "IT helpdesk and support ticket management",
        "Sales tools and CRM integration",
        "Real-time attendance and leave tracking",
        "Administrative service request workflows",
        "Push notifications for instant updates",
        "Offline-first architecture for reliability",
        "Role-based access control (RBAC)"
      ],
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://ekonnect.escortskubota.com/Loginbanner.fbf59eebf34fe6ac94b9.jpg",
      url: "#",
      code : "#"
    },
    {
      title: "SUPPLIER SCHEME SUGGEST",
      subtitle: "Suggestion Portal for EKL Procurement Department - Supplier and Buyer",
      description: "Responsive suggestion management portal using Flutter for mobile and React for Web. Implemented dynamic forms and real-time status tracking, improving internal process efficiency by 40%.",
      technologies: [ "React", "Firebase", "Real-time Updates", "Push Notification"],
      features: [
        "Cross-platform responsive design",
        "Dynamic forms and status tracking",
        "40% improvement in process efficiency",
        "Firebase Cloud Messaging integration"
      ],
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      url: "https://suppliersuggest.escortskubota.com/",
      code : "#"
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
              </div>

              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
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
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleProjectClick(project.url, e)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleCodeClick(project.code, e)}
                    className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg hover:bg-muted transition-colors text-sm cursor-pointer"
                  >
                    <Github size={16} />
                    Code
                  </a>
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
