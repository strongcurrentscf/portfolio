import {
  AboutMe,
  BackgroundAnimation,
  Header,
  Intro,
  SectionDivider,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
} from "components";
import { ActiveSectionContextProvider } from "context";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <BackgroundAnimation />
      <ActiveSectionContextProvider>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24 backdrop-blur-md relative">
          <Intro />
          <SectionDivider />
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </main>
        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </>
  );
}
