import { IMG } from "../../assets";

export const Img = ({ k, alt, className = "", grad, src }) => {
  const imageSrc = src || IMG[k];

  return imageSrc ? (
    <img src={imageSrc} alt={alt} className={className} />
  ) : (
    <div
      role="img"
      aria-label={alt}
      className={`ph ${className}`}
      style={{ background: grad }}
    />
  );
};

export const Logo = ({ k, text, cls }) =>
  IMG[k] ? (
    <img src={IMG[k]} alt={text} className="logo-img" />
  ) : (
    <span className={`wm ${cls}`}>{text}</span>
  );

export const Eyebrow = ({ children, light }) => (
  <p className={`eyebrow ${light ? "gold" : ""}`}>{children}</p>
);

export const Bullets = ({ items }) => (
  <ul className="bul">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export const BookConsultation = () => (
  <a
    className="btn gold"
    href="mailto:secretariat@nlcga.com?subject=IGNITE%20Consultation"
  >
    Book a Consultation
  </a>
);