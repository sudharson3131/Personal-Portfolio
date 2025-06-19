import HeroImage from '../assets/Profile.png';
import { ReactTyped } from 'react-typed';

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="relative w-64 h-64 bg-purple-600 rounded-full blob-shape overflow-hidden shadow-2xl">
          <img
            src={HeroImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">
            <ReactTyped
              strings={[
                'Hi, I am Sudarson!',
                'MERN Stack Developer',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="py-6 max-w-md">
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
