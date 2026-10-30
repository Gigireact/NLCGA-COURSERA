import { Logo, Eyebrow, BookConsultation } from "../ui";

export default function Contact() {
  return (
    <>
      <section id="contact" className="alt">
        <div className="sec wrap contact">
          <div>
            <Eyebrow>07 · CONTACT US</Eyebrow>
            <h2 className="h2">Talk to the IGNITE Programme Office.</h2>
            <p>Questions about licences, executive programmes, consulting or the survey? Our team will help you choose the right option for your company.</p>
            <BookConsultation />
          </div>
          <div className="cgrid">
            <div className="cc"><p className="tag">EMAIL</p><a className="lnk b" href="mailto:secretariat@nlcga.com">secretariat@nlcga.com</a><a className="lnk s" href="mailto:executivesecretary@nlcga.com">executivesecretary@nlcga.com</a></div>
            <div className="cc"><p className="tag">PHONE</p><a className="lnk b" href="tel:+2349163550844">+234 916 3550 844</a></div>
            <div className="cc"><p className="tag">OFFICE</p><p className="sm">NLCGA Secretariat<br />[NLCGA SECRETARIAT ADDRESS]</p></div>
            <div className="cc"><p className="tag">WEBSITE</p><a className="lnk b" href="https://nlcga.com" target="_blank" rel="noreferrer">nlcga.com ↗</a></div>
          </div>
        </div>
      </section>

    </>
  );
}
