import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import useResponsive from "./utils/useResponsive";

function App() {
  const [activeNav, setActiveNav] = useState(null);
  const { isMobile, isTablet, isDesktop } = useResponsive(); 

  useEffect(() => {
    setActiveNav("about");
  }, []);

  return (
    <>
      {isDesktop && (
        <div className="bg-[#efefef] min-h-screen flex items-center justify-center">
          <div className="flex items-start justify-center gap-4">
            <Navigation active={activeNav} onNavChange={setActiveNav} />
            <Profile />
            <AnimatePresence mode="wait">
              <About activeNav={activeNav} />
              <WorkExperience activeNav={activeNav} />
              <Projects activeNav={activeNav} />
              <Contact activeNav={activeNav} />
            </AnimatePresence>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="text-center text-xl text-gray-500 p-8">
            <Navigation active={activeNav} onNavChange={setActiveNav} />
            <Profile/>
        </div>
      )}

      {isMobile && (
        <div className="text-center text-xl text-gray-500 flex flex-col">
            <Navigation active={activeNav} onNavChange={setActiveNav} />
            <Profile/>
            <AnimatePresence mode="wait">
              <About activeNav={activeNav} />
              <WorkExperience activeNav={activeNav} />
              {/* <Projects activeNav={activeNav} /> */}
              {/* <Contact activeNav={activeNav} /> */}
            </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
