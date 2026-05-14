import Navbar   from "./components/Navbar"; 
import Hero     from "./sections/Hero";
import About    from "./sections/About";
import Skills   from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact  from "./sections/Contact";
import Footer   from "./sections/Footer";

/**
 * App — root component.
 * Assembles all sections in order; Navbar is fixed/sticky at top.
 *
 * To add a new section:
 *  1. Create it in src/sections/
 *  2. Import it here
 *  3. Drop it in the <main> block below
 */
export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main id="main-content">
        <Hero />

        {/* Divider line between sections */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-bg-border to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-bg-border to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-bg-border to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-bg-border to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
