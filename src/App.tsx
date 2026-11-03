import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  X,
} from "lucide-react";
import ServicesPage from "./ServicesPage";

const agencyLicense =
  "https://licensing.fdacs.gov/access/agency.aspx?CATEGORY=&COUNTY=00&LICENSE=A+3500258&ORG_ID=&STATUS=ORG_DETAIL&TYPE=AGENCY";
const investigatorLicense =
  "https://licensing.fdacs.gov/access/individual.aspx?CATEGORY=&COUNTY=00&LICENSE=C+3400262&STATUS=IND_DETAIL&TYPE=INDIVIDUAL";
const email = "earlytermination1@gmail.com";
const navigation = [
  { to: "/services", label: "Our expertise" },
  { to: "/about", label: "The firm" },
  { to: "/attorney-services", label: "For attorneys" },
];

function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`text-link ${light ? "text-link-light" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>LICENSED IN FLORIDA · A 3500258</span>
        <span>MIAMI & FORT LAUDERDALE</span>
        <a href="tel:+17865548878">
          LET’S TALK <span className="utility-phone">786.554.8878</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
      <div className="main-nav">
        <nav className="desktop-nav nav-left" aria-label="Main navigation">
          {navigation.slice(0, 2).map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/"
          aria-label="Best Background Investigations home"
          className="brand"
        >
          <img
            src="/images/brand-logo-transparent.png"
            width="64"
            height="64"
            alt=""
          />
          <span>
            BEST BACKGROUND<span>INVESTIGATIONS</span>
            <small>EARLY TERMINATION, LLC</small>
          </span>
        </Link>
        <div className="desktop-nav nav-right">
          <NavLink to="/attorney-services">For attorneys</NavLink>
          <Link to="/contact" className="nav-contact">
            Discuss your case <ArrowUpRight size={16} />
          </Link>
        </div>
        <button
          className="mobile-toggle"
          ref={menuRef}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
              <ArrowUpRight size={21} />
            </NavLink>
          ))}
          <Link to="/contact">
            Discuss your case
            <ArrowUpRight size={21} />
          </Link>
          <a href="tel:+17865548878">786.554.8878</a>
        </nav>
      )}
    </header>
  );
}

function Credentials() {
  return (
    <div className="credentials shell">
      <div>
        <ShieldCheck size={23} strokeWidth={1.25} />
        <span>
          FLORIDA LICENSED<small>Private investigation agency</small>
        </span>
      </div>
      <div>
        <span className="credential-number">35+</span>
        <span>
          YEARS OF EXPERIENCE<small>State & federal law enforcement</small>
        </span>
      </div>
      <div>
        <span className="credential-mark">↗</span>
        <span>
          PERSONAL ATTENTION<small>From the first conversation</small>
        </span>
      </div>
      <a href={agencyLicense} target="_blank" rel="noreferrer">
        VERIFY OUR LICENSE
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

const homeServices = [
  {
    name: "Background investigations",
    text: "Know more. Decide with confidence.",
    detail:
      "Purposeful research for personal, employment, and business decisions. From court records and reference checks to due diligence, we focus on the information that matters to you.",
    id: "background",
  },
  {
    name: "Private investigations",
    text: "A closer look at the full picture.",
    detail:
      "Independent fact-finding, witness location and interviews, asset research, surveillance, and open-source investigations. Discreet work shaped around your circumstances.",
    id: "private",
  },
  {
    name: "Federal supervision consulting",
    text: "Experienced guidance through complexity.",
    detail:
      "Specialized insight into probation, supervised release, early termination, compliance, and reentry. Decades inside the system inform our support for you and your legal team.",
    id: "federal",
  },
];

function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/courthouse-columns.webp"
          alt="A long colonnade of courthouse pillars"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-inner">
          <div className="hero-kicker">
            <span className="short-rule" />
            PRIVATE INVESTIGATIONS & FEDERAL CONSULTING
          </div>
          <h1 id="hero-title">
            We tip the scales of justice
            <br />
            in your favor!
          </h1>
          <p>
            Uncover the facts. Understand your options.
            <br />
            Move forward with experience on your side.
          </p>
          <div className="hero-actions">
            <Link className="button button-brass" to="/contact">
              A confidential conversation
              <ArrowUpRight size={18} />
            </Link>
            <Link className="hero-explore" to="/services">
              Explore our expertise
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#introduction">
            A CLEARER PERSPECTIVE
            <ArrowDown size={15} />
          </a>
          <span>DISCRETION. INTEGRITY. EXPERIENCE.</span>
          <span>SOUTH FLORIDA</span>
        </div>
      </section>
      <Credentials />
      <section id="introduction" className="intro-section shell section-space">
        <div className="section-label">EXPERIENCE WITH PURPOSE</div>
        <div className="intro-grid">
          <h2>
            Facts matter.
            <br />
            Experience makes
            <br />
            the difference.
          </h2>
          <div className="intro-copy">
            <p className="lead-copy">
              When the questions are complex, the right perspective changes
              everything.
            </p>
            <p>
              Best Background Investigations brings decades of state and federal
              law enforcement experience to private investigations and federal
              supervision consulting.
            </p>
            <p>
              Led by former Supervisory U.S. Probation Officer Jeff Feldman, we
              help attorneys, businesses, and individuals find clarity in the
              details—and confidence in their next step.
            </p>
            <ArrowLink to="/about">Get to know the firm</ArrowLink>
          </div>
        </div>
      </section>
      <section className="expertise-section section-space">
        <div className="shell">
          <div className="section-label">OUR EXPERTISE</div>
          <div className="section-heading-row">
            <h2>
              A thoughtful approach.
              <br />A thorough investigation.
            </h2>
            <p>
              Different circumstances.
              <br />
              The same commitment to the facts.
            </p>
          </div>
          <div className="expertise-list">
            {homeServices.map((service, i) => (
              <article
                key={service.id}
                className={`expertise-row ${expanded === i ? "expanded" : ""}`}
              >
                <button
                  className="expertise-trigger"
                  aria-expanded={expanded === i}
                  aria-controls={`home-service-${service.id}`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="expertise-title">{service.name}</span>
                  <span className="expertise-short">{service.text}</span>
                  <span className="row-toggle">
                    {expanded === i ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>
                <div
                  id={`home-service-${service.id}`}
                  hidden={expanded !== i}
                  className="expertise-detail"
                >
                  <p>{service.detail}</p>
                  <ArrowLink to={`/services#${service.id}`} light>
                    Explore this service
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
          <div className="expertise-bottom">
            <span>FOR INDIVIDUALS. FOR BUSINESSES. FOR LEGAL TEAMS.</span>
            <ArrowLink to="/services" light>
              View all services
            </ArrowLink>
          </div>
        </div>
      </section>
      <section className="people-section shell section-space">
        <div className="people-image">
          <img
            src="/images/founder.webp"
            width="721"
            height="900"
            loading="lazy"
            alt="Jeff Feldman, founder and lead investigator"
          />
          <div className="photo-caption">
            <span>JEFF FELDMAN</span>
            <span>FOUNDER & LEAD INVESTIGATOR</span>
          </div>
        </div>
        <div className="people-copy">
          <div className="section-label">THE PEOPLE BEHIND THE WORK</div>
          <h2>
            Decades of service.
            <br />A personal commitment.
          </h2>
          <p>
            A case is never just a file. It’s your reputation, your business,
            your future.
          </p>
          <p>
            Jeff Feldman served 25 years as a Supervisory United States
            Probation Officer, following more than a decade with the Florida
            Department of Corrections. Today, that experience informs every
            inquiry, every detail, and every conversation.
          </p>
          <div className="experience-note">
            <span>
              35<span>+</span>
            </span>
            <p>
              YEARS OF STATE & FEDERAL
              <br />
              LAW ENFORCEMENT EXPERIENCE
            </p>
          </div>
          <ArrowLink to="/about">Meet your investigators</ArrowLink>
        </div>
      </section>
      <section className="attorney-feature">
        <img
          src="/images/client-consultation.webp"
          width="1400"
          height="934"
          loading="lazy"
          alt="Two professionals reviewing a case together"
        />
        <div>
          <div className="section-label">A PARTNER TO YOUR PRACTICE</div>
          <h2>
            Your case.
            <br />
            Our experience.
            <br />A stronger perspective.
          </h2>
          <p>
            Independent investigative support and federal probation insight for
            attorneys who want to see the complete picture.
          </p>
          <ArrowLink to="/attorney-services">
            Explore attorney services
          </ArrowLink>
        </div>
      </section>
      <FAQ compact />
      <ContactBand />
    </>
  );
}

function ContactBand() {
  return (
    <section className="contact-band shell">
      <div>
        <div className="eyebrow">EVERY ANSWER STARTS WITH A CONVERSATION</div>
        <h2>Let’s find your way forward.</h2>
      </div>
      <Link className="button button-dark" to="/contact">
        Discuss your case
        <ArrowUpRight size={19} />
      </Link>
    </section>
  );
}

function About() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">THE FIRM / EARLY TERMINATION, LLC</div>
        <h1>
          Experience earned.
          <br />
          Trust built personally.
        </h1>
        <div className="page-intro-bottom">
          <p>
            Best Background Investigations brings a career’s worth of
            perspective to the questions that matter to you.
          </p>
          <span>
            MIAMI & FORT LAUDERDALE
            <br />
            SOUTHERN DISTRICT OF FLORIDA
          </span>
        </div>
      </section>
      <div className="about-banner">
        <img
          src="/images/courthouse-columns.webp"
          alt="Classical courthouse columns"
        />
      </div>
      <section className="shell section-space">
        <div className="section-label">OUR APPROACH</div>
        <div className="intro-grid">
          <h2>
            A careful eye.
            <br />A human perspective.
          </h2>
          <div className="intro-copy">
            <p className="lead-copy">
              Our work begins with understanding your circumstances.
            </p>
            <p>
              Early Termination, LLC, doing business as Best Background
              Investigations, is a Florida private investigation agency serving
              individuals, businesses, and legal teams.
            </p>
            <p>
              Our investigators draw on extensive careers in public service to
              bring careful research, professional judgment, and personal
              attention to private investigations and complex supervision
              matters.
            </p>
            <a
              className="text-link"
              href={agencyLicense}
              target="_blank"
              rel="noreferrer"
            >
              Florida agency license A 3500258
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="team-section shell">
        <article className="team-profile">
          <img
            src="/images/founder.webp"
            width="721"
            height="900"
            loading="lazy"
            alt="Jeff Feldman"
          />
          <div>
            <div className="eyebrow">FOUNDER & LEAD INVESTIGATOR</div>
            <h2>Jeff Feldman</h2>
            <p className="lead-copy">
              35+ years of state and federal law enforcement experience.
            </p>
            <p>
              Jeff served 25 years as a Supervisory United States Probation
              Officer in the Southern District of Florida. Before his federal
              appointment, he spent more than a decade as a Probation/Parole
              Specialist with the Florida Department of Corrections.
            </p>
            <p>
              His experience spans complex fraud, corporate offenders,
              cybercrime, and national security matters. His private practice
              focuses on criminal defense support, background investigations,
              and specialized probation consulting.
            </p>
            <p>
              Jeff earned his undergraduate degree at Florida State University
              and pursued graduate studies at Florida International University.
            </p>
            <a
              className="text-link"
              href={investigatorLicense}
              target="_blank"
              rel="noreferrer"
            >
              Investigator license C 3400262
              <ArrowUpRight size={17} />
            </a>
          </div>
        </article>
        <article className="team-profile">
          <img
            src="/images/john-steinhilber.webp"
            width="685"
            height="900"
            loading="lazy"
            alt="John Steinhilber"
          />
          <div>
            <div className="eyebrow">INVESTIGATOR</div>
            <h2>John Steinhilber</h2>
            <p className="lead-copy">
              A career devoted to careful investigation and public service.
            </p>
            <p>
              John served 24 years as a United States Probation Officer in the
              Eastern District of Pennsylvania and the Southern District of
              Florida. His work included investigations and supervision
              involving individual and corporate offenders.
            </p>
            <p>
              Before his federal career, he spent four years investigating
              abuse, neglect, and financial exploitation with Florida’s Adult
              Protective Services Division. His background also includes
              corporate security work.
            </p>
            <p>
              A University of Massachusetts graduate, John brings a measured,
              professional approach to helping clients through the investigative
              process.
            </p>
          </div>
        </article>
      </section>
      <ContactBand />
    </>
  );
}

const attorneySupport = [
  [
    "Case investigation",
    "Independent case research, background investigations, witness location, and interviews to help you understand the evidence and the people behind it.",
  ],
  [
    "Federal supervision insight",
    "Experienced consultation on probation and supervised release conditions, compliance concerns, and alleged violations.",
  ],
  [
    "Early termination support",
    "Case analysis and supporting documentation to assist counsel in evaluating and preparing early termination requests.",
  ],
  [
    "Assets & due diligence",
    "Asset location, corporate research, open-source investigation, and relevant record review tailored to your matter.",
  ],
  [
    "Transitions & reentry",
    "Support with supervision transfers, release planning, relocation questions, and complex post-release requirements.",
  ],
  [
    "Expert consultation",
    "A former federal probation officer’s perspective for case preparation, hearings, and expert testimony.",
  ],
];

function AttorneyServices() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">FOR ATTORNEYS</div>
        <h1>
          A deeper perspective.
          <br />A dedicated partner.
        </h1>
        <div className="page-intro-bottom">
          <p>
            Independent investigation and experienced federal supervision
            insight, built around the needs of your case.
          </p>
          <Link className="button button-dark" to="/contact?service=attorneys">
            Discuss a matter
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <div className="attorney-page-image">
        <img
          src="/images/client-consultation.webp"
          alt="Professional consultation at a desk"
        />
      </div>
      <section className="shell section-space">
        <div className="section-label">
          PRACTICAL SUPPORT FOR YOUR LEGAL TEAM
        </div>
        <div className="section-heading-row">
          <h2>
            The details matter.
            <br />
            We help you find them.
          </h2>
          <p>
            From initial inquiry through case preparation, our role is to
            support your work with careful investigation and informed
            perspective.
          </p>
        </div>
        <div className="attorney-grid">
          {attorneySupport.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="service-note">
          Investigative and consulting services support counsel. Legal advice,
          representation, and filings remain with the client’s attorney.
        </p>
      </section>
      <section className="attorney-statement">
        <div className="shell">
          <span className="eyebrow">EXPERIENCE FROM INSIDE THE SYSTEM</span>
          <h2>
            25 years in federal probation.
            <br />A perspective that goes deeper.
          </h2>
          <p>
            Jeff Feldman’s career as a Supervisory United States Probation
            Officer in the Southern District of Florida informs our
            understanding of complex federal supervision matters.
          </p>
          <ArrowLink to="/about" light>
            Meet the investigators
          </ArrowLink>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

const questions = [
  [
    "Who do you work with?",
    "We work with individuals, businesses, and attorneys. The scope of each investigation or consulting engagement is tailored to the questions you need answered.",
  ],
  [
    "What areas do you serve?",
    "Our firm is based in South Florida, serving Miami, Fort Lauderdale, and the Southern District of Florida. Contact us to discuss the location and scope of your matter.",
  ],
  [
    "How does an engagement begin?",
    "Start with a confidential conversation by phone or email. We will discuss your objectives, the information available, and an appropriate scope before work begins. Fees depend on the services and scope of the engagement.",
  ],
  [
    "Can you assist with early termination of supervision?",
    "We provide case analysis, research, and documentation support for early termination matters. When a matter requires legal advice or a court filing, we work in support of your attorney. Decisions remain with the court.",
  ],
  [
    "Is your agency licensed?",
    "Yes. Early Termination, LLC holds Florida private investigation agency license A 3500258. Lead investigator Jeff Feldman holds Florida private investigator license C 3400262. You can view the state license listings using the verification links in the footer.",
  ],
];

function FAQ({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = compact ? questions.slice(0, 3) : questions;
  return (
    <section
      className={`faq-section shell section-space ${compact ? "" : "faq-page"}`}
    >
      <div>
        <div className="section-label">A FEW HELPFUL ANSWERS</div>
        <h2>Before we begin.</h2>
        {compact && (
          <ArrowLink to="/faq">More about working together</ArrowLink>
        )}
      </div>
      <div className="faq-list">
        {items.map(([question, answer], i) => (
          <article key={question}>
            <h3>
              <button
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {question}
                {open === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={open !== i}>
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
const serviceOptions = [
  { value: "background", label: "Background investigation" },
  { value: "private", label: "Private investigation" },
  { value: "federal", label: "Federal supervision consulting" },
  { value: "attorneys", label: "Attorney support" },
  { value: "other", label: "I’d like to discuss my options" },
];

function Contact() {
  const [params] = useSearchParams();
  const selected = params.get("service") || "";
  const [form, setForm] = useState<Inquiry>({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions.some((s) => s.value === selected) ? selected : "",
    message: "",
  });
  const [reviewing, setReviewing] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const update = (field: keyof Inquiry, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));
  const serviceName =
    serviceOptions.find((s) => s.value === form.service)?.label ||
    "General inquiry";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(`${serviceName} — ${form.name}`)}&body=${encodeURIComponent(`Hello,\n\nI would like to discuss ${serviceName.toLowerCase()}.\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email}${form.phone ? `\nPhone: ${form.phone}` : ""}\n`)}`;
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setReviewing(true);
  };
  useEffect(() => {
    if (reviewing) reviewRef.current?.focus();
  }, [reviewing]);
  return (
    <>
      <section className="page-intro shell contact-intro">
        <div className="eyebrow">LET’S TALK</div>
        <h1>
          A conversation.
          <br />A clearer next step.
        </h1>
        <p>
          Tell us what you need to understand.
          <br />
          We’ll talk through how our experience can help.
        </p>
      </section>
      <section className="contact-layout shell">
        <aside className="contact-details">
          <div className="contact-method">
            <span className="eyebrow">CALL DIRECTLY</span>
            <a href="tel:+17865548878">
              786.554.8878
              <ArrowUpRight size={24} />
            </a>
          </div>
          <div className="contact-method">
            <span className="eyebrow">EMAIL THE FIRM</span>
            <a className="email-address" href={`mailto:${email}`}>
              {email}
              <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="contact-method">
            <span className="eyebrow">BASED IN SOUTH FLORIDA</span>
            <p>
              Miami & Fort Lauderdale
              <br />
              <span>Southern District of Florida</span>
            </p>
          </div>
          <p className="language-note">Hablamos Español.</p>
          <div className="contact-license">
            <ShieldCheck size={28} strokeWidth={1.2} />
            <p>
              Florida licensed private
              <br />
              investigation agency
              <a href={agencyLicense} target="_blank" rel="noreferrer">
                A 3500258
                <ArrowUpRight size={13} />
              </a>
            </p>
          </div>
        </aside>
        <div className="inquiry-panel">
          {reviewing ? (
            <div className="inquiry-review" ref={reviewRef} tabIndex={-1}>
              <Check size={36} strokeWidth={1.2} />
              <h2>Your inquiry is ready.</h2>
              <p>
                Open your email app to review and send your message to the firm.
                Your inquiry has not been sent yet.
              </p>
              <dl>
                <dt>YOUR NAME</dt>
                <dd>{form.name}</dd>
                <dt>REPLY EMAIL</dt>
                <dd>{form.email}</dd>
                <dt>SERVICE</dt>
                <dd>{serviceName}</dd>
                <dt>MESSAGE</dt>
                <dd className="review-message">{form.message}</dd>
              </dl>
              <a href={mailto} className="button button-dark">
                Open email draft
                <ArrowUpRight size={18} />
              </a>
              <button
                className="text-link"
                onClick={() => {
                  setReviewing(false);
                  requestAnimationFrame(() => nameRef.current?.focus());
                }}
              >
                Edit inquiry
                <ArrowRight size={17} />
              </button>
              <p className="form-note">
                Prefer to call? Reach us at{" "}
                <a href="tel:+17865548878">786.554.8878</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="eyebrow">START A CONFIDENTIAL CONVERSATION</div>
              <h2>How can we help?</h2>
              <div className="form-grid">
                <label>
                  Full name <span>*</span>
                  <input
                    ref={nameRef}
                    required
                    autoComplete="name"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email address <span>*</span>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    maxLength={150}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Phone number <span className="optional">(optional)</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  maxLength={30}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Your preferred phone number"
                />
              </label>
              <label>
                I’m interested in <span>*</span>
                <div className="select-wrap">
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={17} />
                </div>
              </label>
              <label>
                A brief introduction <span>*</span>
                <textarea
                  required
                  rows={4}
                  maxLength={1800}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="A little about what you’re looking for. Please save sensitive records for your conversation with the investigator."
                />
              </label>
              <button className="button button-dark" type="submit">
                Review your inquiry
                <ArrowRight size={18} />
              </button>
              <p className="form-note">
                This prepares an email draft for you to review and send.
                <br />
                Fields marked * are required.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Privacy() {
  return (
    <section className="shell legal-page page-intro">
      <div className="eyebrow">PRIVACY</div>
      <h1>
        Your information.
        <br />
        Your choice.
      </h1>
      <div className="legal-copy">
        <h2>Contacting the firm</h2>
        <p>
          The inquiry form prepares an email draft on your device. The website
          does not submit or store your inquiry. You choose whether to send it
          using your email application. Information you send by email is
          received by Early Termination, LLC at {email}.
        </p>
        <h2>Website data</h2>
        <p>
          This website does not use advertising cookies, analytics scripts, or
          tracking pixels. Fonts and images are hosted with the site. The
          hosting provider may process standard request and security logs to
          deliver and protect the website.
        </p>
        <h2>Third-party links</h2>
        <p>
          License verification links open the Florida Department of Agriculture
          and Consumer Services website, which has its own privacy practices.
        </p>
        <h2>Questions</h2>
        <p>
          Contact the firm at <a href={`mailto:${email}`}>{email}</a> or{" "}
          <a href="tel:+17865548878">786-554-8878</a> with questions about
          information you have shared.
        </p>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="shell page-intro not-found">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link className="button button-dark" to="/">
        Return home
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img
                src="/images/brand-logo-transparent.png"
                width="78"
                height="78"
                alt="Best Background Investigations logo"
              />
              <span>
                BEST BACKGROUND<span>INVESTIGATIONS</span>
                <small>EARLY TERMINATION, LLC</small>
              </span>
            </Link>
            <p>
              Discretion. Integrity. Experience.
              <br />A clearer perspective, when it matters most.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <span className="eyebrow">EXPLORE</span>
            <Link to="/services">Our expertise</Link>
            <Link to="/about">The firm</Link>
            <Link to="/attorney-services">For attorneys</Link>
            <Link to="/faq">Common questions</Link>
          </nav>
          <div className="footer-contact">
            <span className="eyebrow">START A CONVERSATION</span>
            <a className="footer-phone" href="tel:+17865548878">
              786.554.8878
              <ArrowUpRight size={21} />
            </a>
            <a href={`mailto:${email}`}>{email}</a>
            <p>
              Miami & Fort Lauderdale
              <br />
              Southern District of Florida
              <br />
              <span>Hablamos Español</span>
            </p>
          </div>
        </div>
        <div className="footer-license">
          <a href={agencyLicense} target="_blank" rel="noreferrer">
            FL AGENCY LICENSE A 3500258
            <ArrowUpRight size={12} />
          </a>
          <a href={investigatorLicense} target="_blank" rel="noreferrer">
            FL INVESTIGATOR LICENSE C 3400262
            <ArrowUpRight size={12} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} EARLY TERMINATION, LLC. ALL RIGHTS
            RESERVED.
          </span>
          <Link to="/privacy">PRIVACY</Link>
          <span>DESIGN BY GRADIENTV</span>
        </div>
      </div>
    </footer>
  );
}

const titles: Record<string, string> = {
  "/": "Private Investigations & Federal Consulting",
  "/services": "Our Expertise",
  "/about": "Meet the Firm",
  "/attorney-services": "Attorney Services",
  "/contact": "Discuss Your Case",
  "/faq": "Common Questions",
  "/privacy": "Privacy",
};
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);
  useEffect(() => {
    document.title = `${titles[pathname] || "Page Not Found"} | Best Background Investigations`;
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <PageEffects />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/attorney-services" element={<AttorneyServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/faq"
            element={
              <>
                <section className="shell page-intro">
                  <div className="eyebrow">WORKING TOGETHER</div>
                  <h1>
                    A little clarity.
                    <br />
                    Before we begin.
                  </h1>
                </section>
                <FAQ />
                <ContactBand />
              </>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
