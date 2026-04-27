import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'from-blue-500/10 to-indigo-500/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-500',
    skills: [
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    title: 'Frameworks & SDKs',
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-500',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'GetX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Riverpod', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    ],
  },
  {
    title: 'Tools & Utilities',
    color: 'from-green-500/10 to-teal-500/10',
    border: 'border-green-500/20',
    iconColor: 'text-green-500',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'Xcode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'Databases',
    color: 'from-orange-500/10 to-yellow-500/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-500',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Skills & Expertise</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, ci) => (
            <div
              key={ci}
              className={`bg-gradient-to-br ${category.color} border ${category.border} rounded-xl p-6 shadow-sm`}
            >
              <h3 className="text-base font-bold text-foreground mb-4 uppercase tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="flex flex-col items-center gap-1.5 w-16 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-200">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-4">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Xcellence Award */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative h-44 overflow-hidden bg-muted">
                <img
                  src="/images/xcellence_award.jpeg"
                  alt="Xcellence Award"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow">
                  🏅 Finalist · Top 2
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-base font-bold text-foreground mb-1">Xcellence Award — Escorts Kubota</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Honored as a top finalist at the Xcellence Awards by Escorts Kubota Limited, ranking among the top 2 nominees. While not the overall winner, being recognized as a finalist in the top 2 reflects exceptional contribution and performance within the organization.
                </p>
                <p className="mt-2 text-[11px] text-muted-foreground/60 italic border-t border-border pt-2">
                  * Finalist recognition — awarded for outstanding performance, not the grand prize winner.
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-44 overflow-hidden bg-muted">
                <img
                  src="/images/ncc_excellence.jpeg"
                  alt="Leadership"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-base font-bold text-foreground mb-1">Leadership Excellence — NCC</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Served as Under Officer in NCC at Mody University and represented Rajasthan Directorate in the prestigious All India Thal Sainik Camp 2022, demonstrating exemplary leadership and discipline.
                </p>
              </div>
            </div>

            {/* Academic */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-44 overflow-hidden bg-muted">
                <img
                  src="/images/graduation.jpeg"
                  alt="Academic Achievement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-base font-bold text-foreground mb-1">Academic Excellence — CGPA 8.7</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Graduated with a CGPA of 8.7 in Computer Science and Engineering from Mody University of Science and Technology, reflecting consistent academic dedication and technical depth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

