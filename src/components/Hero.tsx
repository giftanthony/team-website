import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isIntersecting } = useIntersectionObserver(heroRef, { threshold: 0.1 });
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 dark:from-blue-900/20 dark:to-teal-900/20"></div>
      </div>
      
      <div className={`container mx-auto px-6 py-16 text-center transition-all duration-1000 transform ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bringing <span className="text-blue-600 dark:text-blue-400">Innovation</span> to Life
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          We're a team of passionate creators, developers, and visionaries working together 
          to build cutting-edge solutions that transform ideas into reality.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#team"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Meet Our Team
          </a>
          <a 
            href="#contact"
            className="bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;