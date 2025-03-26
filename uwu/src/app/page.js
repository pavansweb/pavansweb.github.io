"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Instagram, Mail, User, Palette } from "lucide-react";
import Image from 'next/image';

const THEMES = {
  dark: {
    background: 'bg-black text-white',
    accent: 'text-blue-400',
    card: 'bg-gray-900 hover:bg-gray-800',
  },
  light: {
    background: 'bg-white text-black',
    accent: 'text-blue-600',
    card: 'bg-gray-100 hover:bg-gray-200',
  },
  cyberpunk: {
    background: 'bg-gray-900 text-cyan-300',
    accent: 'text-pink-500',
    card: 'bg-gray-800 border-2 border-pink-500 hover:border-cyan-300',
  }
};

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

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

  const cycleTheme = () => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextIndex]);
  };

  const age = calculateAge();
  const theme = THEMES[currentTheme];

  return (
    <div className={`min-h-screen font-sans ${theme.background} transition-colors duration-500`}>
      {/* Theme Toggle */}
      <button 
        onClick={cycleTheme}
        className={`fixed top-4 right-4 z-60 ${theme.accent} hover:scale-110 transition`}
      >
        <Palette size={32} />
      </button>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 ${theme.background}/70 backdrop-blur-sm`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className={`text-2xl font-bold ${theme.accent}`}>Pavan Hegde</div>
          <div className="flex items-center space-x-6">
            {['About', 'Projects', 'Contact'].map((section) => (
              <a 
                key={section} 
                href={`#${section.toLowerCase()}`} 
                className={`hover:${theme.accent} transition`}
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Rest of the code remains the same as previous submission */}
      <motion.section
        style={{ scale, opacity }}
        className="min-h-screen flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">Pavan Hegde</h1>
          <p className={`text-2xl ${theme.accent} mb-8`}>
            Web Developer | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { 
                icon: Github, 
                href: "https://github.com/pavansweb" 
              },
              { 
                icon: Instagram, 
                href: "https://www.instagram.com/pavan._.hegde" 
              }
            ].map(({icon: Icon, href}, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                className={`hover:${theme.accent} transition transform hover:scale-110`}
              >
                <Icon size={32} />
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Remaining sections stay the same */}
      <section id="about" className="container mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <User size={64} className={`mx-auto mb-6 ${theme.accent}`} />
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300">
            I'm a passionate web developer with a keen interest in creating
            innovative and efficient web applications. I love exploring new
            technologies and building solutions that make a difference.
          </p>
          <p className="text-xl text-gray-300 mt-4">
            I am <span className="font-bold text-white">{age}</span> years old.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="container mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
            {
              name: "Pookiefy",
              description: "Listen to your favoutie songs without any ads!!on your personal music heaven pookiefy",
              image: "https://i.postimg.cc/C5GvB590/Capture.jpg",
              link: "https://pookiefy.onrender.com/",
            },
            {
              name: "Rock Papers Scissors",
              description: "Test your skills and luck with an computer in the game of rock papers scissors.",
              image: "https://i.postimg.cc/k5k2k3p0/Rock-Papers-Sissors.png",
              link: "https://prps.vercel.app/",
            },
            {
              name: "Tic Tac Toe",
              description: "Play Tic Tac Toe, with your friends or even with the bot.",
              image: "https://i.postimg.cc/7LgDXfpT/tictactoe.png",
              link: "https://ptictactoe.vercel.app/",
            },
            {
              name: "Bucket list",
              description: "A place to store all your dreams, the things you want to do, so that you can never forget them!",
              image: "https://i.postimg.cc/qRK4R0V4/bucket-list.png",
              link: "https://bucket-list-rho.vercel.app/",
            },
          ].map((project, index) => (
            <Link href={project.link} key={index} target="_blank" className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${theme.card} rounded-lg overflow-hidden hover:scale-105 transition transform`}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { 
                icon: Mail, 
                href: "mailto:pavansh555@gmail.com" 
              },
              { 
                icon: Instagram, 
                href: "https://www.instagram.com/pavan._.hegde" 
              },
              { 
                icon: Github, 
                href: "https://github.com/pavansweb" 
              }
            ].map(({icon: Icon, href}, index) => (
              <Link 
                key={index} 
                href={href} 
                target="_blank" 
                className={`hover:${theme.accent} transition transform hover:scale-110`}
              >
                <Icon size={32} />
              </Link>
            ))}
          </div>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </motion.div>
      </section>

      <footer className={`${theme.card} py-6 text-center`}>
        <p className="text-gray-400">© 2024 Pavan Hegde. All Rights Reserved.</p>
      </footer>
    </div>
  );
}