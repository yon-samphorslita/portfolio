import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TextCursor from "./blocks/TextAnimations/TextCursor/TextCursor";

function App() {
  return (
    <div className="min-h-screen relative" data-name="app">
      {/* Floating Emoji Cursor Trail */}
      <TextCursor
        text="✨💫🚀" // multiple characters = trailing pattern
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={12}
      />

      {/* Your Sections */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
