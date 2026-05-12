import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Computer Science student specializing in Data Science.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center animate-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Rishi Maddheshiya</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-4 h-12">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          I build AI-powered solutions, full-stack applications, and real-world
          software projects. Focused on Python, Machine Learning, Data
          Analytics, and Software Development.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            📄 Download Resume
          </a>
          <a
            href="https://github.com/rishii99"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rishi-maddheshiya-3764bb1b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex justify-center gap-8 text-slate-400">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">5</p>
            <p className="text-sm">Projects Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">5+</p>
            <p className="text-sm">Tech Stack</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">100%</p>
            <p className="text-sm">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
