import React, { useEffect, useRef } from "react";
import { ArrowDown, Download } from "lucide-react";

type NetworkPoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const pointCount = 160;
    const connectionDistance = 165;
    const cursorRange = 190;
    const cursor = { x: -1000, y: -1000 };
    let points: NetworkPoint[] = [];
    let animationFrameId = 0;

    const createPoints = () => {
      points = Array.from({ length: pointCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 1.8 + 1.2,
      }));
    };

    const resizeCanvas = () => {
      const { width, height } = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createPoints();
    };

    const moveCursor = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      cursor.x = event.clientX - bounds.left;
      cursor.y = event.clientY - bounds.top;
    };

    const clearCursor = () => {
      cursor.x = -1000;
      cursor.y = -1000;
    };

    const draw = () => {
      const { width, height } = section.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        const deltaX = cursor.x - point.x;
        const deltaY = cursor.y - point.y;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < cursorRange) {
          const force = (cursorRange - distance) / cursorRange;
          point.vx -= (deltaX / Math.max(distance, 1)) * force * 0.05;
          point.vy -= (deltaY / Math.max(distance, 1)) * force * 0.05;
        }

        point.x += point.vx;
        point.y += point.vy;
        point.vx *= 0.99;
        point.vy *= 0.99;

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));
      });

      for (let firstIndex = 0; firstIndex < points.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < points.length; secondIndex += 1) {
          const first = points[firstIndex];
          const second = points[secondIndex];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);

          if (distance < connectionDistance) {
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.strokeStyle = `rgba(14, 135, 151, ${0.58 * (1 - distance / connectionDistance)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = point.radius > 2.45 ? "rgba(219, 145, 49, 0.96)" : "rgba(0, 126, 145, 0.9)";
        context.shadowBlur = 9;
        context.shadowColor = point.radius > 2.45 ? "rgba(219, 145, 49, 0.7)" : "rgba(0, 126, 145, 0.65)";
        context.fill();
        context.shadowBlur = 0;
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    section.addEventListener("pointermove", moveCursor);
    section.addEventListener("pointerleave", clearCursor);
    animationFrameId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      section.removeEventListener("pointermove", moveCursor);
      section.removeEventListener("pointerleave", clearCursor);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/20 pt-16">
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-95" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">Shristy Jaiswal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in">
             Mobile App Engineer (Native + Cross-Platform) & MERN Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Mobile Application (Android + iOS) and MERN Stack Developer with over 4+ years of experience building responsive,
              cross-platform and native web and mobile applications. Specializing in
              Flutter, React Native, Java, Kotlin, Swift, SwiftUI and Node.js with a focus on clean code and exceptional user
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
                href="/shristy_jaiswal_resume.pdf"
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
                4+
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
