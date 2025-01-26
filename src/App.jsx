import Headers from "./sections/Headers";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <div className="head-container"> 
        <Headers />
      </div>
      <div className="snap-container">
        <Hero />
        <Projects />
      </div>
      {/*<About />
      <Services />
      <Contact />
      <Footer />*/}
    </>
  );
};

export default App;
