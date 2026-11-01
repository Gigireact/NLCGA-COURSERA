import { Img, Logo, Eyebrow } from "../ui";
import { PARTNERS } from "../../data";
import coursera from "../../assets/images/Coursera-Logo1.png";
import cognitus from "../../assets/images/cognitus-logo.png";
import thunderbird from "../../assets/images/logo-thunderbird-asu.png";
import cockrell from "../../assets/images/RGB_formal_Cockrell.png";

export default function Partnerships() {
  return (
    <>
      <section id="partnerships" className="alt">
        <div className="sec wrap">
          <div className="split">
            <div>
              <Eyebrow>STRATEGIC PARTNERSHIPS</Eyebrow>
              <h2 className="h2">World-class institutions, working for Nigeria's gas sector.</h2>
              <p>IGNITE brings together a global learning platform, two leading US universities and a local delivery partner — so NLCGA members get world-class content with on-the-ground support.</p>
            </div>
            <Img k="partners" alt="Colourful figures in a circle" className="r16 split-img" grad="linear-gradient(135deg,#e8472b,#f7b844,#1c88d0)" />
          </div>
          {PARTNERS.map(([k, t, cls, d]) => (
            <article key={t} className="prt">
              <div className="prt-logo">
                {k === "coursera" && <img src={coursera} alt="Coursera logo" />}
                {k === "cockrell" && <img src={cockrell} alt="University of Texas logo" />}
                {k === "tb" && <img src={thunderbird} alt="Thunderbird logo" />}
                {k === "cognitus" && <img src={cognitus} alt="Cognitus logo" />}
              </div>

              <div>
                <h3>{t}</h3>
                <p className="sm">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
