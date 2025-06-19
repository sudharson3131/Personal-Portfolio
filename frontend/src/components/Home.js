import React, { useEffect } from 'react';
import HeroImage from '../assets/Profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative w-64 h-64 bg-purple-600 rounded-full blob-shape overflow-hidden shadow-2xl"
        >
          <img
            src={HeroImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-md"
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I am Sudarson!
          </h1>
          <p className="py-6">
            I'm a passionate developer specializing in building modern web applications using MongoDB,
            Express, React, and Node.js. I love creating clean, responsive, and performant web experiences.
          </p>
          <a href="#project" className="btn btn-primary">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
