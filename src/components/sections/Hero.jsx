import { useState } from "react";
import { Img, Logo } from "../ui";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow gold">NLCGA IGNITE INSTITUTE · POWERED BY COURSERA</p>
            <h1>Igniting Skill Sets for a Skills-First Gas Economy</h1>
            <p className="lead">IGNITE is the learning and professional development initiative of the Nigeria Liquefied &amp; Compressed Gases Association. It gives member companies world-class online learning, energy executive education and HR consulting for every part of the value chain — LPG, CNG, LNG, hydrogen and biogas.</p>
            <div className="btns">
              <a className="btn gold" href="#resources">Order Coursera for Business licenses</a>
              <a className="btn ghost" href="#resources">Take the learning needs survey</a>
            </div>
          </div>
          <div className="hero-side">
            <div className="chip"><Logo k="nlcga" text="NLCGA" cls="flame" /><span className="vr" /><Logo k="coursera" text="coursera" cls="co-wm" /></div>
            <Img k="hero" alt="LNG carrier at night" className="r16 hero-img" grad="linear-gradient(160deg,#0b1d3a,#c98a5a 55%,#0b1d3a)" />
          </div>
        </div>
        <div className="wrap">
          <div className="window">
            <div className="win-row">
              <div><p className="eyebrow green">SPECIAL SUBSCRIPTION WINDOW OPEN</p><h2>5 November – 15 December 2026</h2></div>
              <button className="btn gold sm" aria-expanded={open} onClick={() => setOpen(!open)}>Learn more {open ? "⌃" : "⌄"}</button>
            </div>
            {open && <p className="win-more">Licences are open to NLCGA member companies in good standing. Cleared payment is required by 15 December 2026.</p>}
            <hr />
            <p className="muted">Member price</p>
            <a className="lnk" href="mailto:secretariat@nlcga.com">Contact NLCGA Secretariat</a>
          </div>
          <div className="strat"><span>STRATEGIC PARTNER</span><Logo k="cognitus" text="COGNITUS" cls="cog" /></div>
        </div>
        <div className="stripe" />
      </section>
    </>
  );
}
