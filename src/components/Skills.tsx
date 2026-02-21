import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Dart", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Python", level: 75 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Flutter", level: 92 },
        { name: "React", level: 88 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Flexbox", level: 88 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "REST APIs", level: 88 },
      ]
    }
  ];

  const otherSkills = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "UI/UX Design",
    "Git & Version Control",
    "Agile Methodologies",
    "Cross-platform Development",
    "State Management",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills - only names since progress bars removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground font-medium">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Additional Skills & Knowledge</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-3 rounded-lg text-center text-muted-foreground font-medium hover:from-primary/20 hover:to-accent/20 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Leadership Excellence</h4>
              <p className="text-primary-foreground/80">
                Served as Under Officer in NCC (Mody University) and represented Rajasthan Directorate 
                in All India Thal Sainik Camp 2022
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Academic Performance</h4>
              <p className="text-primary-foreground/80">
                Graduated with CGPA 8.7 in Computer Science and Engineering from 
                Mody University of Science and Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
