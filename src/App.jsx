import "./styles/global.css";
import "./styles/ignite.css";
import { Header, Footer } from "./components/layout";
import { Hero, About, Institute, Learning, Partnerships, Consulting, Resources, Contact } from "./components/sections";

export default function App() {
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
