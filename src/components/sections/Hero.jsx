import { useState } from "react";
import { Img, Logo } from "../ui";
import nlcga from "../../assets/images/nlcga1.png";
import coursera from "../../assets/images/Coursera-Logo1.png";
import cognitus from "../../assets/images/cognitus-logo.png";
import app1 from "../../assets/images/app1.png";

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
            <div className="chip"><img src={nlcga} alt="NLCGA" className="nlcga-hero" /><span className="vr" /><img src={coursera} alt="coursera" className="coursera" /></div>
            <img
              k="hero"
              alt="LNG carrier at night"
              className="r16 hero-img"
              src={app1}
            />          
          </div>
        </div>
        <div className="wrap">
          <div className="window">
            <div className="win-row">
              <div><p className="eyebrow green">SPECIAL SUBSCRIPTION WINDOW OPEN</p><h2>5 November – 15 December 2026</h2></div>
              <button className="btn gold sm" aria-expanded={open} onClick={() => setOpen(!open)}>Learn more {open ? "^" : "⌄"}</button>
            </div>
            {open && <p className="win-more">Licences are open to NLCGA member companies in good standing. Cleared payment is required by 15 December 2026.</p>}
            <hr />
            <p className="muted">Member price</p>
            <a className="lnk" href="mailto:secretariat@nlcga.com">Contact NLCGA Secretariat</a>
          </div>
          <div className="strat"><span>STRATEGIC PARTNER</span><img src={cognitus} alt="Cognitus" className="cog" /></div>
        </div>
        <div className="stripe" />
      </section>
    </>
  );
}
