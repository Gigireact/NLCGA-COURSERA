import { useState } from "react";
import { Logo } from "../ui";
import { NAV } from "../../data";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="top wrap">
        <div className="brand">
          <Logo k="nlcga" text="NLCGA" cls="flame" />
          <span className="vr" />
          <span className="brand-t">Nigeria Liquefied and Compressed Gases Association</span>
        </div>
        <Logo k="ignite" text="ignite" cls="ig-wm" />
        <Logo k="coursera" text="coursera" cls="co-wm" />
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
