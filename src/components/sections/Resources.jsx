import { Eyebrow } from "../ui";
import { TERMS } from "../../data";

export default function Resources() {
  return (
    <>
      <section id="resources" className="sec wrap">
        <Eyebrow>06 · RESOURCES</Eyebrow>
        <h2 className="h2">Get started with IGNITE.</h2>
        <p>Download the two documents below. Return completed forms to the NLCGA IGNITE Programme Office at <a className="lnk" href="mailto:secretariat@nlcga.com">secretariat@nlcga.com</a>, copying <a className="lnk" href="mailto:executivesecretary@nlcga.com">executivesecretary@nlcga.com</a>.</p>
        <div className="grid2">
          <article className="panel top-g">
            <p className="tag green">STEP 1 · TELL US YOUR NEEDS</p><h3>Learning Needs Survey</h3>
            <p className="sm">The NLCGA Member Company Profile &amp; Human Capital Development Needs Survey captures your corporate profile, value-chain segment, workforce and training priorities. It shapes the IGNITE programme and the NLCGA member directory. Responses are indicative and are not a purchase commitment.</p>
            <a className="btn navy sm" href="/downloads/learning-needs-survey.pdf" download>Download the survey (PDF)</a>
          </article>
          <article className="panel top-b">
            <p className="tag blue">STEP 2 · PLACE YOUR ORDER</p><h3>Coursera Licence Order Form</h3>
            <p className="sm">Order Coursera enterprise licences for your company under the IGNITE programme. Once signed, the form is your company's binding licence order and participation agreement with NLCGA. Open to NLCGA member companies in good standing, incorporated in Nigeria and operating in the midstream and downstream gas sector.</p>
            <a className="btn navy sm" href="/downloads/coursera-order-form.pdf" download>Download the order form (PDF)</a>
          </article>
        </div>
        <div className="terms">
          <h3>How to order — key terms at a glance</h3>
          <div className="terms-g">{TERMS.map(([t, d]) => <div key={t}><h4>{t}</h4><p className="sm">{d}</p></div>)}</div>
        </div>
      </section>
    </>
  );
}
