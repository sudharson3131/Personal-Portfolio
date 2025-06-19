import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <FaGithub className="text-teal-400 text-2xl" />
          <p className="text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">Sudarson</span> — MERN Stack Developer
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/sudarson-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sudarson"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sudarson@example.com"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
