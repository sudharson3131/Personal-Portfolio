import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Profile from '../../src/assets/Profile.png';
import Profile from '../assets/sudan.png'
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content flex-col lg:flex-row">
        {/* Profile Image */}
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src={Profile}
          alt="Profile"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        {/* Text Content */}
        <div data-aos="fade-up" data-aos-delay="400" className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-primary">About Me</h1>
          <p className="text-base-content leading-relaxed">
            I'm a dedicated <strong>Full Stack Developer</strong> with a passion for building responsive and scalable web applications. I specialize in the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and enjoy solving real-world problems through code. My focus is on creating smooth user experiences, clean interfaces, and secure backend services.
          </p>

          {/* Education Section */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-secondary mb-2">🎓 Education</h2>
            <ul className="list-disc list-inside space-y-1 text-base-content">
              <li><strong>Bachelor of Engineering</strong> – Civil Engineering, Anna University (2016 - 2029)</li>
              <li><strong>Full Stack Developer Program</strong> – 3 Months Intensive Bootcamp (MERN Stack)</li>
            </ul>
          </div>

          <a href="#contact" className="btn btn-outline btn-primary mt-4">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
