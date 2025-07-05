function Projects() {
  const projects = [
    {
      title: "NhamEii",
      description:
        "Interactive food recommendation app with Flutter & Firebase",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      tech: ["Flutter", "Firebase", "Dart"],
      colors: ["blue-500/20", "orange-500/20", "green-500/20"],
      github: "https://github.com/yungNita/NhamEii-App.git",
      type: "📱 Mobile App",
      emoji: "🍽️",
    },
    {
      title: "AhaGo",
      description: "Full-stack food delivery platform with multi-panel system",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Laravel", "MySQL"],
      colors: ["green-500/20", "red-500/20", "blue-500/20"],
      github: "https://github.com/Caffeine26/AhaGo.git",
      type: "🌐 Web App",
      emoji: "🚚",
    },
    {
      title: "Web Textboard",
      description:
        "Interactive text styling with visual effects and animations",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      colors: ["orange-500/20", "blue-500/20", "yellow-500/20"],
      github: "https://github.com/darororo/web-textboard.git",
      type: "✨ Frontend",
      emoji: "📝",
    },
    {
      title: "Dinosauraw",
      description: "Java-based mini-game with OOP and immersive audio",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tech: ["Java", "OOP", "Figma"],
      colors: ["orange-500/20", "purple-500/20", "pink-500/20"],
      github: "#",
      type: "🎮 Game",
      emoji: "🦕",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 magical-bg-variant relative section-blend"
    >
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-bubble"></div>
      <div className="absolute bottom-10 right-10 w-14 h-14 bg-yellow-400/20 rounded-full animate-floating"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">🚀 Featured Projects 🚀</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.emoji} {project.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-${project.colors[techIndex]} text-${tech === "Flutter" ? "blue" : tech === "Firebase" ? "orange" : tech === "Vue.js" ? "green" : tech === "Laravel" ? "red" : tech === "HTML" ? "orange" : tech === "CSS" ? "blue" : tech === "JavaScript" ? "yellow" : tech === "Java" ? "orange" : tech === "OOP" ? "purple" : tech === "Figma" ? "pink" : "blue"}-200 text-xs rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github !== "#" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-300 hover:text-white transition-colors"
                >
                  <div className="icon-github text-lg mr-2"></div>
                  <span className="text-sm">View Code</span>
                </a>
              ) : (
                <div className="text-green-300 text-sm">
                  🔒 Private Repository
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
