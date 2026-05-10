import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import Riya from "../../assets/Riya.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Riya Karunde
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["Fullstack Developer", "Frontend Developer", "UI/UX Designer", "Coder","Java Developer"]}
              loop={0}              // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            I am a passionate Full Stack Developer fresher with strong skills in
            Java Full Stack Development. I enjoy creating responsive frontend
            interfaces, scalable backend APIs, and complete modern web
            applications. I love learning new technologies and transforming
            ideas into real-world digital solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1x_lV1Sk0JoWn-R3v8QX3jn0vk1sGv0yS/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-38 h-38 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={Riya}
              alt="Riya Karunde"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
