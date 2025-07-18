import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Left Side (Logo + Dropdown) */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a
          href="#home"
          className="btn btn-ghost normal-case text-xl font-bold tracking-wide text-primary"
        >
          Sudarson.dev
        </a>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Right Side (Resume + Theme Toggle) */}
      <div className="navbar-end flex items-center gap-4">
              <a
        href="../sudharson_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-primary text-sm"
      >
        Resume
      </a>


        <label className="cursor-pointer">
          <input
            type="checkbox"
            className="toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
