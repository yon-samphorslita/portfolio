import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
import mobile from "../assets/nham.png";
import dino from "../assets/dino.png";
import texto from "../assets/texto.png";
import aha from "../assets/aha.png";
function Projects() {
  const projects = [
    {
      title: "NhamEii - Mobile App",
      description:
        "Interactive food recommendation app with Flutter & Firebase",
      image: mobile,
      tech: ["Flutter", "Firebase", "Dart", "Figma"],
      github: "https://github.com/yungNita/NhamEii-App.git",
      type: "📱 Mobile App",
    },
    {
      title: "AhaGo",
      description: "Full-stack food delivery platform with multi-panel system",
      image:aha,
      tech: ["Vue.js", "Laravel", "MySQL", "Laravel Sanctum", "Figma", "DBeaver", "Postman"],
      github: "https://github.com/Caffeine26/AhaGo.git",
      type: "🌐 Web App",
    },
    {
      title: "Web Textboard",
      description:
        "Interactive text styling with visual effects and animations",
      image:texto,
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
      github: "https://github.com/darororo/web-textboard.git",
      type: "✨ Frontend",
    },
    {
      title: "Dinosauraw",
      description: "Java-based mini-game with OOP and immersive audio",
      image:dino,
      tech: ["Java", "OOP", "Figma"],
      github: "#",
      type: "🎮 Game",
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
        <h1 className="section-title text-2xl text-[#38005b]">Featured Projects </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* TiltedCard on the left */}
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={`${project.title}`}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="bg-white/80 px-4 py-2 rounded-full text-black text-sm font-semibold">
                    {project.title}
                  </div>
                }
              />

              {/* Info box on the right */}
              <div className="flex-1 text-white max-w-96 bg-white/30 rounded-2xl p-3">
                <h3 className="text-2xl font-bold mb-2">
                  {project.emoji} {project.title}
                </h3>
                <p className="mb-4 text-white/80">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-purple-800 px-3 py-1 rounded-full text-xs"
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
                    className="inline-block text-sm text-[#38005b] hover:text-blue-200 underline"
                  >
                    View Code →
                  </a>
                ) : (
                  <div className="">
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
