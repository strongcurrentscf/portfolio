import {
  AboutMe,
  BackgroundAnimation,
  Header,
  Intro,
  SectionDivider,
  Projects,
} from "components";
import { ActiveSectionContextProvider } from "context";

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
        </main>
      </ActiveSectionContextProvider>
    </>
  );
}
