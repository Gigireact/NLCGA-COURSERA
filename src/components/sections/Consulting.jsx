import { Img, Eyebrow, BookConsultation } from "../ui";
import { SERVICES } from "../../data";

export default function Consulting() {
  return (
    <>
      <section id="consulting" className="dark">
        <div className="sec wrap">
          <div className="cta-row">
            <div><Eyebrow light>HR + LEARNING SOLUTIONS CONSULTING</Eyebrow><h2 className="h2 w">More than licences: a partner for your people strategy.</h2>
              <p className="lead">Our consultants help member companies turn learning into measurable workforce results — from understanding skills gaps to proving compliance to regulators and boards.</p></div>
            <BookConsultation />
          </div>
          <Img k="consulting" alt="Engineer presenting process diagram to team" className="r16 wide-img" grad="linear-gradient(135deg,#2a4a7a,#6a8fb8 50%,#1a3560)" />
          <div className="svc">{SERVICES.map(([t, d]) => <div key={t}><h3>{t}</h3><p className="sm">{d}</p></div>)}</div>
        </div>
      </section>
    </>
  );
}
