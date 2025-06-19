import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile from '../../src/assets/Profile.png';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src={Profile}
          alt="Profile"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div data-aos="fade-up" data-aos-delay="400" className="max-w-xl">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            I'm a passionate Full Stack Developer skilled in building dynamic web applications.
            I specialize in the MERN stack and love creating user-friendly interfaces and efficient backend systems.
          </p>
          <a href="#contact" className="btn btn-outline btn-primary">
            Contact
          </a>
        </div>
         
      </div>
    </div>
  );
}
