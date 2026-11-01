import { Logo } from "../ui";
import ignite from "../../assets/images/ignite-logo3.png";
import coursera from "../../assets/images/Coursera-Logo1.png";
import cockrell from "../../assets/images/RGB_formal_Cockrell.png";
import thunderbird from "../../assets/images/logo-thunderbird-asu.png";
import cognitus from "../../assets/images/cognitus-logo.png";

export default function Footer() {
  return (
    <footer className="wrap foot">
     <div className="foot-logos">
        <img src={ignite} alt="IGNITE logo" />
        <img src={coursera} alt="Coursera logo" />
        <img src={cockrell} alt="Cockrell School of Engineering logo" />
        <img src={thunderbird} alt="Thunderbird ASU logo" />
        <img src={cognitus} alt="Cognitus logo" />
      </div>

      <p className="sm muted">IGNITE is an initiative of the Nigeria Liquefied &amp; Compressed Gases Association, powered by Coursera and delivered by Cognitus Consulting Global.</p>
      <p className="sm muted">© 2026 NLCGA. All rights reserved.</p>
    </footer>
  );
}
