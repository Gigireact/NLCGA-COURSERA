import { Img, Logo, Eyebrow } from "../ui";

export default function About() {
  return (
    <>
      <section id="nlcga" className="sec wrap about">
        <aside>
          <Logo k="nlcga" text="NLCGA" cls="flame big" />
          <a className="lnk" href="https://nlcga.com" target="_blank" rel="noreferrer">Visit the NLCGA website at nlcga.com ↗</a>
          <Img k="about" alt="Refinery pipes at sunset" className="r16 about-img" grad="linear-gradient(160deg,#f4a022,#3a2a2a 60%,#12294d)" />
        </aside>
        <div>
          <Eyebrow>01 · ABOUT NLCGA</Eyebrow>
          <h2 className="h2">The voice of Nigeria's liquefied and compressed gases industry.</h2>
          <p>The Nigeria Liquefied &amp; Compressed Gases Association (NLCGA) is the national trade association for companies across the gas value chain — from import terminals, bottling plants and haulage to CNG stations, conversion workshops, equipment suppliers and retail.</p>
          <p>Founded as the Nigeria LPG Association (NLPGA) in the early 2000s to grow domestic LPG use, the association widened its remit in 2024. Members voted to become NLCGA in September 2024, and the new identity was unveiled at the 14th NLCGA Conference &amp; Exhibition in Lagos in November 2024 — bringing LPG, CNG, LNG, hydrogen and biogas under one roof, in step with Nigeria's Decade of Gas.</p>
          <p>NLCGA acts as a bridge between government policy, industry practice and consumer needs, with a focus on safety, innovation, member training and environmental stewardship.</p>
          <div className="pills">{["LPG", "CNG", "LNG", "Hydrogen", "Biogas"].map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>
    </>
  );
}
