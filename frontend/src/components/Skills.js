import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const skills = [
    { label: "MongoDB", value: 85 },
    { label: "Express.js", value: 80 },
    { label: "React.js", value: 90 },
    { label: "Node.js", value: 85 },
    { label: "JavaScript", value: 92 },
    { label: "HTML5", value: 95 },
    { label: "CSS3", value: 90 },
    { label: "Tailwind CSS", value: 88 },
    { label: "Git & GitHub", value: 80 },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#F2F2F2" }}
      className="w-full px-6 py-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Full-Stack Developer focused on the MERN stack and modern web technologies
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.value}%</span>
              </div>
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
                  style={{
                    width: visible ? `${skill.value}%` : "0%",
                    transitionDelay: `${index * 150}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
