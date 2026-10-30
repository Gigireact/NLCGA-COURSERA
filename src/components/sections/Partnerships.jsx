import { Img, Logo, Eyebrow } from "../ui";
import { PARTNERS } from "../../data";

export default function Partnerships() {
  return (
    <>
      <section id="partnerships" className="alt">
        <div className="sec wrap">
          <div className="split">
            <div>
              <Eyebrow>04 · STRATEGIC PARTNERSHIPS</Eyebrow>
              <h2 className="h2">World-class institutions, working for Nigeria's gas sector.</h2>
              <p>IGNITE brings together a global learning platform, two leading US universities and a local delivery partner — so NLCGA members get world-class content with on-the-ground support.</p>
            </div>
            <Img k="partners" alt="Colourful figures in a circle" className="r16 split-img" grad="linear-gradient(135deg,#e8472b,#f7b844,#1c88d0)" />
          </div>
          {PARTNERS.map(([k, t, cls, d]) => (
            <article key={t} className="prt">
              <div className="prt-logo"><Logo k={k} text={{ coursera: "coursera", ut: "Cockrell School of Engineering", tb: "THUNDERBIRD | ASU", cog: "COGNITUS" }[cls] || t} cls={cls === "cog" ? "cog" : cls === "coursera" ? "co-wm lg" : "serif"} /></div>
              <div><h3>{t}</h3><p className="sm">{d}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
