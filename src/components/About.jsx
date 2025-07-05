function About() {
  return (
    <section id="about" className="py-16 magical-bg-alt relative section-blend">
      <div className="absolute top-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-floating"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 bg-pink-400/20 rounded-full animate-bubble"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">🌟 About Me 🌟</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🎓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <p className="text-white/80 text-sm">ICT Student at ITC</p>
            <p className="text-white/60 text-xs">Year 4 • July 2026</p>
          </div>

          <div className="card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              📍
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-white/80 text-sm">Phnom Penh</p>
            <p className="text-white/60 text-xs">Cambodia</p>
          </div>

          <div className="card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              💼
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Status</h3>
            <p className="text-white/80 text-sm">Available</p>
            <p className="text-white/60 text-xs">Full-time & Freelance</p>
          </div>
        </div>

        <div className="card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop"
                alt="Web Development"
                className="w-16 h-16 rounded-2xl mx-auto mb-3 object-cover"
              />
              <p className="text-white/90 text-sm font-medium">Web Dev</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop"
                alt="Mobile Development"
                className="w-16 h-16 rounded-2xl mx-auto mb-3 object-cover"
              />
              <p className="text-white/90 text-sm font-medium">Mobile Dev</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop"
                alt="UI/UX Design"
                className="w-16 h-16 rounded-2xl mx-auto mb-3 object-cover"
              />
              <p className="text-white/90 text-sm font-medium">UI/UX</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop"
                alt="Database"
                className="w-16 h-16 rounded-2xl mx-auto mb-3 object-cover"
              />
              <p className="text-white/90 text-sm font-medium">Database</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
