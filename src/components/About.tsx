import React from "react";
import { Award, Users, Coffee, Code } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: Coffee, label: "Years Experience", value: "1+" },
    { icon: Users, label: "User Engagement Boost", value: "30%" },
    { icon: Award, label: "CGPA", value: "8.7" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer with a strong foundation in mobile and
            web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Frontend Developer with 1 year of hands-on
              experience in building responsive, cross-browser web and mobile
              applications. My expertise lies in translating design mockups into
              functional, beautiful user interfaces using modern technologies
              like React and Flutter.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently working as a Software Engineer at Escorts Kubota
              Limited, I specialize in developing cross-platform mobile
              applications with a focus on UI/UX design, REST API integration,
              and efficient state management. I've successfully delivered 5+
              projects with 100% responsiveness and achieved up to 30% boost in
              user engagement.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Beyond coding, I served as an Under Officer in NCC at Mody
              University, leading teams and representing Rajasthan Directorate
              in the All India Thal Sainik Camp 2022. This experience has
              strengthened my leadership skills and attention to detail.
            </p>

            {/* Education */}
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Education
              </h3>
              <p className="text-muted-foreground">
                <strong>B.Tech Computer Science and Engineering</strong>
                <br />
                Mody University of Science and Technology, Rajasthan
                <br />
                CGPA: 8.7 | May 2020 – May 2024
              </p>
            </div>
          </div>

          {/* Stats and Image */}
          <div>
            {/* NCC Image */}
            <div className="mb-8">
              <img
                src="/images/9d135a78-7fd0-4972-a6c5-87d08d8e1668.png"
                alt="Shristy Jaiswal in NCC uniform"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Serving as Under Officer in NCC - All India Thal Sainik Camp
                2022
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
