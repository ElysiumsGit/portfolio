import { useEffect, useState } from "react";
import Navigation from "./components/Navigation"
import Profile from "./components/Profile"
import About from "./pages/About"
import WorkExperience from "./pages/WorkExperience";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/Projects";

function App() {
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    setActiveNav("about");
  }, []);
  
  return (
    <div className="bg-[#efefef] min-h-screen flex items-center justify-center">
      <div className="flex items-start justify-center gap-4">
        <Navigation active={activeNav} onNavChange={setActiveNav} />
        
        <Profile/>
        <AnimatePresence mode="wait">
          <About activeNav={activeNav} />
          <WorkExperience activeNav={activeNav}/>
          <Projects activeNav={activeNav}/>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
