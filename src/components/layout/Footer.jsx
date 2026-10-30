import { Logo } from "../ui";

export default function Footer() {
  return (
    <footer className="wrap foot">
      <div className="foot-logos">
        <Logo k="ignite" text="ignite" cls="ig-wm" /><Logo k="coursera" text="coursera" cls="co-wm" />
        <Logo k="ut" text="Cockrell School of Engineering" cls="serif" /><Logo k="thunderbird" text="THUNDERBIRD | ASU" cls="serif" /><Logo k="cognitus" text="COGNITUS" cls="cog" />
      </div>
      <p className="sm muted">IGNITE is an initiative of the Nigeria Liquefied &amp; Compressed Gases Association, powered by Coursera and delivered by Cognitus Consulting Global.</p>
      <p className="sm muted">© 2026 NLCGA. All rights reserved.</p>
    </footer>
  );
}
