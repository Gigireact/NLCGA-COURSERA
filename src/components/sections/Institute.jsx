import { Img, Eyebrow } from "../ui";
import { PILLARS, STEPS } from "../../data";

export default function Institute() {
  return (
    <>
      <section id="institute" className="alt">
        <div className="sec wrap">
          <div className="split">
            <div>
              <Eyebrow>THE IGNITE INSTITUTE</Eyebrow>
              <h2 className="h2">One institute for a safer, more skilled gas workforce.</h2>
              <p>The IGNITE Institute is NLCGA's learning and professional development arm. As the industry moves from LPG into CNG, LNG, hydrogen and biogas, members need practical upskilling, clear safety guidance and credible proof of compliance. IGNITE brings these together in one place — built on Coursera's global catalogue, extended with energy executive education from leading universities, and delivered locally by Cognitus Consulting Global.</p>
            </div>
            <Img k="institute" alt="Two learners reading together" className="r16 split-img" grad="linear-gradient(135deg,#2a6fa8,#e8b98a)" />
          </div>
          <div className="cards3">
            {PILLARS.map(([c, t, d, wide]) => (
              <article key={t} className={`card ${wide ? "wide" : ""}`}>
                <i className="bar" style={{ background: c }} /><h3>{t}</h3><p className="sm">{d}</p>
              </article>
            ))}
          </div>
          <h3 className="how">How IGNITE works</h3>
          <div className="steps">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="step"><b className="stp">Step {i + 1}</b><h4>{t}</h4><p className="sm">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
