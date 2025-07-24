
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="bg-card rounded-lg shadow-lg p-8 border-l-4 border-primary hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Software Engineer - Frontend</h3>
                <h4 className="text-xl text-primary font-semibold mb-2">Escorts Kubota Limited</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>June 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Faridabad, India</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Briefcase className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Developed and managed cross-platform mobile applications from planning to deployment, 
                  ensuring responsive and user-friendly interfaces.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Specialized in Flutter, focusing on UI/UX design, REST API integration, and efficient 
                  state management for smooth user experiences.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Collaborated closely with backend teams to optimize API consumption and boost app 
                  performance across devices.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Integrated Firebase services, including Authentication, Cloud Messaging, and Realtime 
                  Database, to deliver secure and scalable frontend features.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
              <ul className="text-muted-foreground space-y-1">
                <li>• Delivered 5+ projects with 100% responsiveness</li>
                <li>• Achieved up to 30% boost in user engagement</li>
                <li>• Optimized app performance across multiple devices</li>
                <li>• Implemented secure authentication and real-time features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
