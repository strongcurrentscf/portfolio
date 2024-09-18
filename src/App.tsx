import { BackgroundAnimation, Header } from "components";
import { ActiveSectionContextProvider } from "context";

export default function App() {
  return (
    <>
      <BackgroundAnimation />
      <ActiveSectionContextProvider>
        <Header />
      </ActiveSectionContextProvider>
    </>
  );
}
