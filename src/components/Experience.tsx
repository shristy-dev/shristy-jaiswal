
import React, { useState } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Mobile Application Developer — Flutter & React Native',
    company: 'Escorts Kubota Limited',
    logo: '/images/escorts_kubota.png',
    type: 'Full-time',
    duration: 'Mar 2024 – Present',
    location: 'Faridabad, India',
    points: [
      'Developed and managed cross-platform mobile applications from planning to deployment, ensuring responsive and user-friendly interfaces.',
      'Specialized in Flutter, focusing on UI/UX design, REST API integration, and efficient state management for smooth user experiences.',
      'Collaborated closely with backend teams to optimize API consumption and boost app performance across devices.',
      'Integrated Firebase services, including Authentication, Cloud Messaging, and Realtime Database, to deliver secure and scalable frontend features.',
    ],
    achievements: [
      'Delivered 5+ projects with 100% responsiveness',
      'Achieved up to 30% boost in user engagement',
      'Optimized app performance across multiple devices',
      'Implemented secure authentication and real-time features',
    ],
  },
  {
    role: 'Mobile App Developer (Native + Cross-platform)',
    company: 'Society for Bright Future (SBF India)',
    logo: '/images/sbg_india.png',
    type: 'Internship',
    duration: 'Mar 2022 – Mar 2024 · 2 yrs 1 mo',
    location: 'Delhi, India · Remote',
    points: [
      'Led end-to-end development, deployment, and maintenance of the SBF India mobile application.',
      'Successfully launched and published the application on the Google Play Store, ensuring compliance with all guidelines.',
      'Developed the complete mobile app, focusing on performance, scalability, and user experience.',
      'Managed app updates, bug fixes, and performance improvements post-deployment.',
    ],
    achievements: [],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Professional Experience</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Over 4 years of experience in mobile app development and MERN stack development, delivering
            cross-platform solutions with a focus on performance and usability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Horizontal Stepper */}
          <div className="relative flex items-start mb-10">
            {experiences.map((e, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActive(idx)}
                  className="flex flex-col items-center flex-1 group focus:outline-none"
                >
                  {/* Step circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 overflow-hidden transition-all duration-200 z-10 bg-white
                      ${active === idx
                        ? 'border-primary shadow-md scale-110'
                        : 'border-border group-hover:border-primary'
                      }`}
                  >
                    <img src={e.logo} alt={e.company} className="w-full h-full object-contain p-1" />
                  </div>
                  {/* Step label */}
                  <div className="mt-2 text-center px-1">
                    <p className={`text-xs font-semibold leading-tight transition-colors ${active === idx ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                      {e.company}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{e.duration}</p>
                  </div>
                </button>

                {/* Connector line between steps */}
                {idx < experiences.length - 1 && (
                  <div className="flex-1 h-0.5 mt-5 mx-1 bg-border relative">
                    <div
                      className="absolute inset-0 bg-primary transition-all duration-300 origin-left"
                      style={{ transform: active > idx ? 'scaleX(1)' : 'scaleX(0)' }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Experience Card */}
          <div className="bg-card rounded-xl shadow-md border border-border border-t-4 border-t-primary p-6 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug">{exp.role}</h3>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mb-2">
                  <Building2 size={14} />
                  <span>{exp.company}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-border overflow-hidden flex-shrink-0 bg-white">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2 mb-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Achievements */}
            {exp.achievements.length > 0 && (
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <h5 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Key Achievements</h5>
                <ul className="grid sm:grid-cols-2 gap-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">✓</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step navigation */}
            <div className="flex justify-between mt-5 pt-4 border-t border-border">
              <button
                onClick={() => setActive(i => Math.max(0, i - 1))}
                disabled={active === 0}
                className="text-xs font-medium text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <span className="text-xs text-muted-foreground">{active + 1} / {experiences.length}</span>
              <button
                onClick={() => setActive(i => Math.min(experiences.length - 1, i + 1))}
                disabled={active === experiences.length - 1}
                className="text-xs font-medium text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
