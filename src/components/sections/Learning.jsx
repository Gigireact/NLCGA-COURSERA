import { Img, Logo, Eyebrow, Bullets } from "../ui";
import coursera from "../../assets/images/Coursera-Logo1.png";

export default function Learning() {
  return (
    <>
      <section id="solutions" className="sec wrap">
        <div className="split">
          <div>
            <Eyebrow>LEARNING SOLUTIONS</Eyebrow>
            <h2 className="h2">Learning that fits the way your people work.</h2>
            <p>From frontline crews to the boardroom, IGNITE offers four ways to learn — each one available to NLCGA member companies and their staff.</p>
          </div>
          <Img k="solutions" alt="Smiling worker in hard hat" className="r16 split-img" grad="linear-gradient(135deg,#f7b844,#d9772b)" />
        </div>
        <div className="grid2">
          <article className="panel">
            <img src={coursera} alt="Coursera" className="coursera" />
            <h3>Coursera for Business</h3>
            <p>Coursera is the world's most comprehensive skills development and strategic human performance platform, delivering cost-effective, self-paced, stackable courses, Specializations and Professional Certificates. Learners study with Coursera's elite ecosystem of globally ranked universities and the world's leading technology corporations.</p>
            <div className="stats">
              {[["10,600+", "courses"], ["1,400+", "Specializations"], ["140+", "Professional Certificates"]].map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
            </div>
            <p className="sm">One learner licence gives a full year of unlimited access to the whole catalogue, with admin dashboards to assign learning, track progress and report on skills.</p>
            <Bullets items={["Health, safety & environment, operations and engineering", "Data, AI, digital and IT skills", "Leadership, project management, finance and sales", "Certificates issued by Coursera's learning partners, plus shareable digital badges co-branded for qualifying clients"]} />
            <a className="btn navy sm" href="https://www.coursera.org/business" target="_blank" rel="noreferrer">Learn More</a>
          </article>
          <article className="panel">
            <p className="tag green">FOR SENIOR LEADERS</p>
            <h3>Energy Executive Education</h3>
            <p>Short, intensive programmes for owners, directors and senior managers, delivered with Texas Engineering Executive Education at the Cockrell School of Engineering, The University of Texas at Austin, and Thunderbird School of Global Management at Arizona State University.</p>
            <Bullets items={["Energy transition and gas-business strategy", "Engineering and operations leadership", "Global leadership, management and commercial skills"]} />
            <p><b>Programme dates: [TO BE ANNOUNCED]</b></p>
          </article>
          <article className="panel">
            <p className="tag blue">ANYTIME, ANYWHERE</p>
            <h3>Online Learning</h3>
            <p>Fully online, self-paced learning on any device. Staff study around shifts and site work, download content for low-connectivity locations, and pick up where they left off.</p>
            <Bullets items={["Mobile-friendly video lessons, readings and quizzes", "Short modules for busy frontline teams", "Learning pathways assigned by role"]} />
          </article>
          <article className="panel">
            <p className="tag brown">BEST OF BOTH</p>
            <h3>Hybrid Learning</h3>
            <p>Self-paced online study combined with live, real-time sessions online. Cohorts learn the content on their own schedule, then come together with facilitators and industry experts to apply it.</p>
            <Bullets items={["Self-paced modules for core knowledge", "Live virtual workshops, clinics and expert Q&As", "Cohort tracking and completion reporting"]} />
          </article>
        </div>
      </section>
    </>
  );
}
