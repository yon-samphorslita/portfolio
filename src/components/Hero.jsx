import { HyperText } from "./ui/hyper-text";
import { InteractiveIconCloud } from "./ui/interactive-icon-cloud";

function Hero() {
  return (
    <section className="pt-32 pb-16 magical-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/30 rounded-full animate-bubble"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/30 rounded-full animate-floating"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/30 rounded-full animate-bubble"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-400/30 rounded-full animate-floating"></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-green-400/30 rounded-full animate-bubble"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex gap-10">
          <div className="mb-8 animate-floating">
            <div className="relative">
              <img
                src="../src/assets/profile.jpg"
                alt="Yon Samphorslita"
                className="w-60 h-60 mx-auto mb-6 border-4 border-white/50 shadow-2xl glow rounded-2xl"
              />
              <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
                ✨
              </div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">
                🌟
              </div>
            </div>
            <div className="mt-4 w-60 h-60 mx-auto">
              <InteractiveIconCloud />
            </div>
          </div>
          <div className="text-center">
            <HyperText
              className="text-5xl md:text-7xl font-bold text-white mb-6 ml-3 bg-transparent"
              text="Yon Samphorslita"
            />

            <HyperText
              className="text-2xl md:text-3xl text-white/90 mb-8 font-medium "
              text="Full-Stack Developer"
            />

            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-floating">
                💻
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-bubble">
                📱
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-floating">
                🚀
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-bubble">
                ✨
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>

            <div className="flex justify-center space-x-8 mt-8">
              <a
                href="mailto:yon.samphorslita@gmail.com"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow"
              >
                <div className="icon-mail text-2xl"></div>
              </a>
              <a
                href="https://linkedin.com/in/samphorslita-yon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow"
              >
                <div className="icon-linkedin text-2xl"></div>
              </a>
              <a
                href="https://github.com/yon-samphorslita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow"
              >
                <div className="icon-github text-2xl"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
