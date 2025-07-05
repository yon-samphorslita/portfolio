function Skills() {
  const skillIcons = [
    { name: "HTML", icon: "🌐", color: "from-orange-400 to-red-400" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-400" },
    { name: "Vue.js", icon: "💚", color: "from-green-400 to-emerald-400" },
    { name: "Laravel", icon: "🔥", color: "from-red-400 to-pink-400" },
    { name: "Flutter", icon: "🦋", color: "from-blue-400 to-cyan-400" },
    { name: "Firebase", icon: "🚀", color: "from-purple-400 to-pink-400" },
    { name: "MySQL", icon: "🗄️", color: "from-blue-400 to-indigo-400" },
    { name: "Git", icon: "📝", color: "from-gray-400 to-gray-600" },
    { name: "Figma", icon: "🎨", color: "from-pink-400 to-purple-400" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-400" },
    { name: "Java", icon: "☕", color: "from-orange-400 to-red-400" },
    { name: "PHP", icon: "🐘", color: "from-purple-400 to-indigo-400" },
  ];

  const softSkills = [
    { skill: "Leadership", icon: "👑" },
    { skill: "Teamwork", icon: "🤝" },
    { skill: "Problem Solving", icon: "🧩" },
    { skill: "Communication", icon: "💬" },
    { skill: "Creativity", icon: "🎨" },
  ];

  return (
    <section id="skills" className="py-16 magical-bg relative section-blend">
      <div className="absolute top-20 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-floating"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bubble"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">🛠️ Tech Stack 🛠️</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {skillIcons.map((skill, index) => (
            <div
              key={skill.name}
              className="card text-center group hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <p className="text-white font-medium text-sm">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="card text-center">
          <h3 className="text-2xl font-bold text-white mb-6">💪 Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {softSkills.map((item) => (
              <div
                key={item.skill}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white/90 text-sm font-medium">
                  {item.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
