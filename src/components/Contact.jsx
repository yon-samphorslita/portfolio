function Contact() {
  return (
    <section
      id="contact"
      className="py-16 magical-bg-alt relative section-blend"
    >
      <div className="absolute top-20 left-20 w-16 h-16 bg-purple-400/20 rounded-full animate-floating"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bubble"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">✨ Get In Touch ✨</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              🌟 Let's Connect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">💼</div>
                <p className="text-white/90 text-sm font-medium">Full-time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-white/90 text-sm font-medium">Freelance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">🤝</div>
                <p className="text-white/90 text-sm font-medium">
                  Collaboration
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <div className="icon-mail text-white text-xl"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">✉️ Email</h4>
                  <a
                    href="mailto:yon.samphorslita@gmail.com"
                    className="text-purple-300 hover:text-white text-sm"
                  >
                    yon.samphorslita@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                  <div className="icon-phone text-white text-xl"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">📞 Phone</h4>
                  <a
                    href="tel:+85512953037"
                    className="text-blue-300 hover:text-white text-sm"
                  >
                    (+855) 12 953 037
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4">
                  <div className="icon-map-pin text-white text-xl"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">📍 Location</h4>
                  <p className="text-green-300 text-sm">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/samphorslita-yon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow"
              >
                <div className="icon-linkedin text-2xl"></div>
              </a>
              <a
                href="https://github.com/yon-samphorslita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow"
              >
                <div className="icon-github text-2xl"></div>
              </a>
              <a
                href="mailto:yon.samphorslita@gmail.com"
                className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow"
              >
                <div className="icon-mail text-2xl"></div>
              </a>
            </div>
          </div>

          <div className="card text-center">
            <h3 className="text-xl font-semibold text-white mb-6">
              🎯 Ready to work on
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🌐</div>
                <p className="text-white/90 text-sm">Web Apps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-white/90 text-sm">Mobile Apps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-white/90 text-sm">UI/UX Design</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🔧</div>
                <p className="text-white/90 text-sm">Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
