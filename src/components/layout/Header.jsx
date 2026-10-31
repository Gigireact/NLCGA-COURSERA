import { useState } from "react";
// import { Logo } from "../ui";
import { NAV } from "../../data";
// import cognitus from "../../assets/images/cognitus-logo.png";
import coursera from "../../assets/images/Coursera-Logo.png";
import nlcga from "../../assets/images/nlcga1.png";


export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="top wrap">
        <div className="brand">
          <img src={nlcga} alt="NLCGA" className="nlcga" />
          <span className="vr" />
          <span className="brand-t">Nigeria Liquefied and Compressed Gases Association</span>
        </div>
        <div className="ignite-logo">
          <span>ign</span>
          <img src={nlcga} alt="NLCGA" />
          <span>te</span>
        </div>        
        <img src={coursera} alt="coursera" className="coursera" />
      </header>
      <nav className="nav">
        <button className="burger" aria-expanded={menu} onClick={() => setMenu(!menu)}>Menu ☰</button>
        <ul className={menu ? "show" : ""}>
          {NAV.map((n) => <li key={n}><a href={`#${n.split(" ").pop().toLowerCase()}`}>{n}</a></li>)}
          <li><a className="btn navy sm" href="#contact">Contact us</a></li>
        </ul>
      </nav>
    </>
  );
}
