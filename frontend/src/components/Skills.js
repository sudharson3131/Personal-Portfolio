import profileImage from "../assets/Profile.png"; // Replace with your image path

export default function Skills() {
  const skills = [
    { label: "HTML", value: 95, color: "primary" },
    { label: "CSS", value: 85, color: "secondary" },
    { label: "JavaScript", value: 70, color: "accent" },
    { label: "React", value: 75, color: "success" },
    { label: "Node.js", value: 65, color: "warning" },
    { label: "Express.js", value: 60, color: "info" },
    { label: "MongoDB", value: 60, color: "error" },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-8 bg-base-200">
      {/* Skills List */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold text-center mb-2 col-span-full">My Skills</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-3 rounded-md"
          >
            <span className="text-sm font-medium block mb-1">
              {skill.label} - {skill.value}%
            </span>
            <progress
              className={`progress progress-${skill.color} w-full h-2`}
              value={skill.value}
              max="100"
            ></progress>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="max-w-xs w-full rounded-xl shadow-lg object-contain"
        />
      </div>
    </div>
  );
}
