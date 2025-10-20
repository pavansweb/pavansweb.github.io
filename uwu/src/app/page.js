"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Instagram, Mail, Moon, Sun, Menu, X, ArrowUpRight, Code, Sparkles, Zap, Heart } from "lucide-react";

const THEMES = {
  dark: {
    background: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
    text: 'text-white',
    textMuted: 'text-slate-400',
    accent: 'from-cyan-500 to-blue-600',
    accentGlow: 'shadow-cyan-500/50',
    card: 'bg-slate-900/50 backdrop-blur-xl border border-slate-800/50',
    cardHover: 'hover:bg-slate-800/50 hover:border-cyan-500/50',
    nav: 'bg-slate-950/80',
  },
  light: {
    background: 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50',
    text: 'text-slate-900',
    textMuted: 'text-slate-600',
    accent: 'from-blue-600 to-violet-600',
    accentGlow: 'shadow-blue-500/50',
    card: 'bg-white/70 backdrop-blur-xl border border-slate-200',
    cardHover: 'hover:bg-blue-50/50 hover:border-blue-400/50',
    nav: 'bg-white/80',
  },
};

const PROJECTS = [
  {
    name: "Horizon Movies",
    description: "A fun place to watch movies without any ads",
    image: "https://i.postimg.cc/fLhFXvbB/image.png",
    link: "https://hmovies.onrender.com/",
    tags: ["React", "Entertainment", "UI/UX"],
  },
  {
    name: "Weather App",
    description: "Real-time weather tracking application with responsive design",
    image: "https://i.postimg.cc/cJH8GJH5/Weather.png",
    link: "https://pweather.vercel.app",
    tags: ["React", "API", "Design"],
  },
  {
    name: "Rock Paper Scissors",
    description: "Test your skills and luck with a computer in the game of rock paper scissors",
    image: "https://i.postimg.cc/k5k2k3p0/Rock-Papers-Sissors.png",
    link: "https://prps.vercel.app/",
    tags: ["Game", "JavaScript", "Fun"],
  },
  {
    name: "Tic Tac Toe",
    description: "Play Tic Tac Toe with your friends or even with the bot",
    image: "https://i.postimg.cc/7LgDXfpT/tictactoe.png",
    link: "https://ptictactoe.vercel.app/",
    tags: ["Game", "AI", "Multiplayer"],
  },
  {
    name: "Bucket List",
    description: "A place to store all your dreams, the things you want to do, so that you can never forget them!",
    image: "https://i.postimg.cc/qRK4R0V4/bucket-list.png",
    link: "https://bucket-list-rho.vercel.app/",
    tags: ["Productivity", "React", "Goals"],
  },
];

const FloatingParticles = ({ theme }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -100 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const Header = ({ theme, currentTheme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? `${theme.nav} backdrop-blur-xl shadow-lg` : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.accent} flex items-center justify-center ${theme.accentGlow} shadow-lg`}>
            <Code className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl md:text-2xl font-bold ${theme.text}`}>
            Pavan<span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">.dev</span>
          </span>
        </motion.div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-xl ${theme.card} ${theme.cardHover} transition-all`}
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <div className="hidden md:flex items-center space-x-1">
            {['About', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg ${theme.textMuted} hover:${theme.text} transition-all relative group`}
              >
                {section}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${theme.accent} group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl ${theme.card}`}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${theme.nav} backdrop-blur-xl`}
        >
          <div className="container mx-auto flex flex-col space-y-4 p-6">
            {['About', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg ${theme.text} hover:text-cyan-500 transition`}
              >
                {section}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

const HeroSection = ({ theme, currentTheme }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2009-07-24");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      return age;
    };
    setAge(calculateAge());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <FloatingParticles theme={currentTheme} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} rounded-full blur-xl opacity-50 animate-pulse`} />
          <img
            src="https://i.postimg.cc/D0K0CpWx/491462236-1852394535612657-4493985187951270116-n.jpg"
            alt="Pavan Hegde"
            className="relative rounded-full w-full h-full object-cover border-4 border-white/20 shadow-2xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute -inset-4 bg-gradient-to-r ${theme.accent} rounded-full opacity-20 blur-lg`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${theme.text}`}>
            Pavan <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-transparent bg-clip-text">Hegde</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <Sparkles className="text-cyan-500 w-6 h-6" />
            <p className={`text-2xl md:text-3xl ${theme.textMuted} font-light`}>
              Web Developer | Tech Innovator
            </p>
            <Zap className="text-blue-500 w-6 h-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={`text-lg md:text-xl ${theme.textMuted} mb-12 max-w-2xl mx-auto`}
          >
            Building digital experiences that blend creativity with functionality. 
            {age} years young and passionate about turning ideas into reality.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center space-x-4"
        >
          {[
            { icon: Github, href: "https://github.com/pavansweb", label: "GitHub" },
            { icon: Instagram, href: "https://www.instagram.com/pavan._.hegde", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl ${theme.card} ${theme.cardHover} ${theme.accentGlow} transition-all group`}
            >
              <Icon className={`w-6 h-6 ${theme.text} group-hover:text-cyan-500 transition-colors`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = ({ theme, age }) => (
  <section id="about" className="container mx-auto py-24 px-4 relative">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center ${theme.text}`}>
        About <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Me</span>
      </h2>
      
      <div className={`${theme.card} rounded-3xl p-8 md:p-12 ${theme.cardHover} transition-all`}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${theme.text} flex items-center`}>
              <Code className="w-6 h-6 mr-2 text-cyan-500" />
              What I Do
            </h3>
            <p className={`text-lg ${theme.textMuted} leading-relaxed mb-6`}>
              Just an average random guy who loves coding stuff. I create web experiences 
              that are both beautiful and functional, always pushing the boundaries of what's possible.
            </p>
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${theme.text} flex items-center`}>
              <Heart className="w-6 h-6 mr-2 text-red-500" />
              What I Love
            </h3>
            <p className={`text-lg ${theme.textMuted} leading-relaxed mb-6`}>
              Beyond coding, I'm passionate about physics and exploring the mysteries of the universe. 
              When I'm not at my keyboard, you'll find me on the basketball court or contemplating my next chess move.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <p className={`text-xl ${theme.text} text-center`}>
            Currently <span className={`font-bold bg-gradient-to-r ${theme.accent} text-transparent bg-clip-text`}>{age}</span> years old 
            and loving every moment of this journey!
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

const ProjectsSection = ({ theme }) => (
  <section id="projects" className="container mx-auto py-24 px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${theme.text}`}>
        My <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Projects</span>
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`${theme.card} rounded-2xl overflow-hidden ${theme.cardHover} transition-all group`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`p-4 rounded-full bg-gradient-to-br ${theme.accent} ${theme.accentGlow} shadow-xl`}>
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${theme.text} group-hover:text-cyan-500 transition-colors`}>
                {project.name}
              </h3>
              <p className={`${theme.textMuted} mb-4`}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs ${theme.card} border border-cyan-500/30 text-cyan-500`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

const ContactSection = ({ theme }) => (
  <section id="contact" className="container mx-auto py-24 px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${theme.text}`}>
        Let's <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Connect</span>
      </h2>
      
      <p className={`text-xl ${theme.textMuted} mb-12 leading-relaxed`}>
        I'm always excited to collaborate on new projects, discuss tech innovations, 
        or just chat about the latest in web development. Drop me a message!
      </p>
      
      <div className="flex justify-center space-x-4 mb-12">
        {[
          { icon: Mail, href: "mailto:pavansh555@gmail.com", label: "Email" },
          { icon: Instagram, href: "https://www.instagram.com/pavan._.hegde", label: "Instagram" },
          { icon: Github, href: "https://github.com/pavansweb", label: "GitHub" }
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-2xl ${theme.card} ${theme.cardHover} ${theme.accentGlow} transition-all group`}
          >
            <Icon className={`w-8 h-8 ${theme.text} group-hover:text-cyan-500 transition-colors`} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

const Footer = ({ theme }) => (
  <footer className={`${theme.card} py-8 text-center border-t ${theme.text === 'text-white' ? 'border-slate-800' : 'border-slate-200'}`}>
    <p className={theme.textMuted}>
      © {new Date().getFullYear()} Pavan Hegde. Crafted with <Heart className="inline w-4 h-4 text-red-500" /> and lots of ☕
    </p>
  </footer>
);

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [age, setAge] = useState(0);

  const toggleTheme = () => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2009-07-24");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      return age;
    };
    setAge(calculateAge());
  }, []);

  const theme = THEMES[currentTheme];

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} antialiased transition-colors duration-500`}>
      <Header
        theme={theme}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeroSection theme={theme} currentTheme={currentTheme} />
      <AboutSection theme={theme} age={age} />
      <ProjectsSection theme={theme} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}