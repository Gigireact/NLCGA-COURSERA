import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import "./styles/global.css";
import "./styles/ignite.css";
import { Header, Footer } from "./components/layout";
import {
  Hero,
  About,
  Institute,
  Learning,
  Partnerships,
  Consulting,
  Resources,
  Contact,
} from "./components/sections";

export default function App() {
  useEffect(() => {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    smoothWheel: true,
    lerp: 0.08,
    wheelMultiplier: 1,
  });

  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <div className="ig">
      <Header />
      <main>
        <Hero />
        <About />
        <Institute />
        <Learning />
        <Partnerships />
        <Consulting />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}