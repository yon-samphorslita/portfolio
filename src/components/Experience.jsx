function Experience() {
  const experiences = [
    {
      project: "NhamEii Mobile Application",
      period: "June 2025",
      role: "Mobile Developer & Firebase Integration Specialist",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "Dart"],
      emoji: "📱",
    },
    {
      project: "AhaGo Website",
      period: "June 2025",
      role: "Full-Stack Developer",
      technologies: ["Vue.js", "Laravel", "Google Maps API", "Laravel Sanctum"],
      emoji: "🌐",
    },
    {
      project: "Web Textboard",
      period: "May 2024",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      emoji: "✨",
    },
    {
      project: "Dinosauraw",
      period: "January 2024",
      role: "UI Designer & Game Developer",
      technologies: ["Java", "Figma", "OOP", "Game Development"],
      emoji: "🎮",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 magical-bg relative section-blend"
    >
      <div className="absolute top-16 right-16 w-10 h-10 bg-purple-400/20 rounded-full animate-floating"></div>
      <div className="absolute bottom-16 left-16 w-18 h-18 bg-cyan-400/20 rounded-full animate-bubble"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">💼 Experience Timeline 💼</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                  {exp.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.project}
                  </h3>
                  <p className="text-white/70 text-sm">{exp.period}</p>
                </div>
              </div>

              <p className="text-purple-300 font-medium mb-3 text-sm">
                {exp.role}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
