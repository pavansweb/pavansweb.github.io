"use client";

import React, { useState, useEffect } from "react";
import { motion, px } from "framer-motion";
import Link from "next/link";
import { Github, Instagram, Mail, Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const THEMES = {
  dark: {
    background: 'bg-[#1B1F23] text-white',
    accent: 'text-[#58A6FF] hover:text-[#79C0FF]',
    accent2: 'text-[#FF5A5F] hover:text-[#FF7A7F]',
    card: 'bg-[#161B22] border border-[#30363D] text-white hover:bg-[#21262D] hover:border-[#6E7681]',
    gradient: 'bg-gradient-to-r from-[#58A6FF] via-[#8B949E] to-[#58A6FF]',
    heroBackground: 'https://i.postimg.cc/pTLXY5Rj/image.jpg',
  },
  light: {
    background: 'bg-white text-gray-900',
    accent: 'text-[#0366D6] hover:text-[#0056B3]',
    accent2: 'text-[#FF5A5F] hover:text-[#FF7A7F]',
    card: 'bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200 hover:border-gray-400',
    gradient: 'bg-gradient-to-r from-[#0366D6] via-[#58A6FF] to-[#0366D6]',
    heroBackground: 'https://i.postimg.cc/MHgTp37K/cloudy-sky-background.jpg',
  },
};

const PROJECTS = [
  {
    name: "Horizon Movies",
    description: "A fun place to watch movies without any ads",
    image: "https://i.postimg.cc/fLhFXvbB/image.png",
    link: "https://hmovies.onrender.com/",
  },
  {
    name: "Weather App",
    description: "Real-time weather tracking application with responsive design",
    image: "https://i.postimg.cc/cJH8GJH5/Weather.png",
    link: "https://pweather.vercel.app",
  },
  // {
  //   name: "Pookiefy",
  //   description: "Listen to your favourite songs without any ads on your personal music heaven",
  //   image: "https://i.postimg.cc/C5GvB590/Capture.jpg",
  //   link: "https://pookiefy.onrender.com/",
  // },
  {
    name: "Rock Papers Scissors",
    description: "Test your skills and luck with a computer in the game of rock papers scissors",
    image: "https://i.postimg.cc/k5k2k3p0/Rock-Papers-Sissors.png",
    link: "https://prps.vercel.app/",
  },
  {
    name: "Tic Tac Toe",
    description: "Play Tic Tac Toe, with your friends or even with the bot",
    image: "https://i.postimg.cc/7LgDXfpT/tictactoe.png",
    link: "https://ptictactoe.vercel.app/",
  },
  {
    name: "Bucket list",
    description: "A place to store all your dreams, the things you want to do, so that you can never forget them!",
    image: "https://i.postimg.cc/qRK4R0V4/bucket-list.png",
    link: "https://bucket-list-rho.vercel.app/",
  },
];

const Header = ({ theme, currentTheme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm">
  <nav className="container mx-auto flex justify-between items-center p-4 lg:px-16">
    <div className="flex items-center space-x-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold tracking-tight"
      >
        Who am I?
      </motion.div>
      <Image
        src="https://i.postimg.cc/Fz2hR18L/pavan-logo.png"
        width={70} 
        height={70} 
        alt="Logo"
      />
    </div>

    <div className="flex items-center space-x-4 md:space-x-6">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`hover:${theme.accent} transition-all duration-300 p-2 rounded-full`}
      >
        {currentTheme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="hidden md:flex items-center space-x-6">
        {['About', 'Projects', 'Contact'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className={`text-sm md:text-base ${
              theme.accent === 'text-blue-400 hover:text-blue-300'
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-black'
            } transition-colors group`}
          >
            {section}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${theme.accent}`}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </nav>

  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`md:hidden absolute top-full left-0 w-full ${theme.background} bg-opacity-90 backdrop-blur-md`}
    >
      <div className="flex flex-col items-center space-y-6 p-8">
        {['About', 'Projects', 'Contact'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl hover:${theme.accent} transition"
          >
            {section}
          </a>
        ))}
      </div>
    </motion.div>
  )}
</header>

);

const HeroSection = ({ theme }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2009-07-24");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      const dayDifference = today.getDate() - birthDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age -= 1;
      }
      return age;
    };

    setAge(calculateAge());
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${theme.heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[theme.bg] to-black opacity-80" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[theme.accent] opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-[theme.accent] opacity-20 blur-2xl rounded-full animate-pulse" /> */}

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-5xl md:text-7xl font-bold mb-6`}
        >
          Pavan Hegde
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-2xl md:text-3xl ${theme.accent} mb-10 tracking-wide`}
        >
          Web Developer | Tech Innovator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/pavansweb" },
            { icon: Instagram, href: "https://www.instagram.com/pavan._.hegde" },
          ].map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              className={`hover:${theme.accent} transition transform hover:scale-110 p-3 rounded-full bg-[theme.bg] shadow-lg`}
            >
              <Icon size={32} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



const AboutSection = ({ theme, age }) => (
  <section id="about" className="container mx-auto py-16 md:py-24 px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-clip-text bg-gradient-to-r `}>About Me</h2>
      <p className="text-xl md:text-2xl text-opacity-80 leading-relaxed mb-6">
        Just an average random guy who loves coding shit.
        Other things i love include physics and maths.
        My hobbies are umm basketball and chess mostly?
      </p>
      <p className="text-xl md:text-2xl text-opacity-80">
        I am <span className="font-bold">{age}</span> years old.
      </p>
    </motion.div>
  </section>
);

const ProjectsSection = ({ theme }) => (
  <section id="projects" className="container mx-auto py-16 md:py-24 px-4 relative z-10">
    <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text  bg-gradient-to-r ${theme.gradient}`}>My Projects</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, index) => (
        <Link href={project.link} key={index} target="_blank" className="block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${theme.card} rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform group`}
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHR4fHh0aHBwgJC4nICIsIRwaJDUqKTEzMjJoMj5iZUVxbXdqY2X/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <ArrowUpRight size={48} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition">{project.name}</h3>
              <p className="text-opacity-70">{project.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

const ContactSection = ({ theme }) => (
  <section id="contact" className="container mx-auto py-24 px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto text-center"
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-10 bg-clip-text  bg-gradient-to-r ${theme.gradient}`}>Contact Me</h2>
      <div className="flex justify-center space-x-8 mb-10">
        {[
          { icon: Mail, href: "mailto:pavansh555@gmail.com" },
          { icon: Instagram, href: "https://www.instagram.com/pavan._.hegde" },
          { icon: Github, href: "https://github.com/pavansweb" }
        ].map(({icon: Icon, href}, index) => (
          <Link 
            key={index} 
            href={href} 
            target="_blank" 
            className={`hover:${theme.accent} transition transform hover:scale-110 p-3 rounded-full`}
          >
            <Icon size={32} />
          </Link>
        ))}
      </div>
      <p className="text-xl text-opacity-80 leading-relaxed">
        Feel free to reach out for collaborations, opportunities, or just to say hi! I&apos;m always open to connecting with fellow tech enthusiasts and innovators.
      </p>
    </motion.div>
  </section>
);

const Footer = ({ theme }) => (
  <footer className={`${theme.card} py-8 text-center relative z-10`}>
    <p className="text-opacity-70">© {new Date().getFullYear()} Pavan Hegde. All Rights Reserved.</p>
  </footer>
);

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [age, setAge] = useState(0);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2009-07-24");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      const dayDifference = today.getDate() - birthDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age -= 1;
      }
      return age;
    };

    setAge(calculateAge());
    document.body.className = `${THEMES[currentTheme].background} transition-colors duration-500`;
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [currentTheme, isMobileMenuOpen]);

  const theme = THEMES[currentTheme];

  return (
    <div className={`min-h-screen font-sans ${theme.background} antialiased`}>
      <Header 
        theme={theme} 
        currentTheme={currentTheme} 
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeroSection theme={theme} />
      <AboutSection theme={theme} age={age} />
      <ProjectsSection theme={theme} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}