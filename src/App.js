import React from "react";
import "./style.css";

const FEATURES = [
  {
    title: "Lead-ready contractor sites",
    description:
      "High-converting pages built to get phone calls, estimate requests, and booked appointments.",
  },
  {
    title: "Fast launch with a low setup fee",
    description:
      "A smaller upfront investment gets you live fast, then we scale results with a premium monthly plan.",
  },
  {
    title: "Appointment & quote capture",
    description:
      "Integrated forms, click-to-call, and instant scheduling so every lead gets handled.",
  },
  {
    title: "Monthly growth care",
    description:
      "Ongoing updates, SEO tune-ups, and performance tracking to keep your calendar full.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Contractor strategy",
    description:
      "We map your services (roofing, flooring, HVAC, concrete, remodeling) and ideal homeowner so your site speaks their language.",
  },
  {
    step: "02",
    title: "Design + build",
    description:
      "We craft the visuals, write the copy, and build every section you need to win jobs.",
  },
  {
    step: "03",
    title: "Launch + leads",
    description:
      "We publish, connect tracking, and keep optimizing with your monthly plan.",
  },
];

const TESTIMONIALS = [
  {
    name: "Angel R.",
    role: "Concrete & Masonry",
    quote:
      "Our phones started ringing the first week. The site looks premium and the lead flow is real.",
  },
  {
    name: "Tasha L.",
    role: "HVAC Contractor",
    quote:
      "They handled the full build and now we just pay monthly for updates and SEO. Zero hassle.",
  },
  {
    name: "Marcus W.",
    role: "Roofing Crew",
    quote:
      "We book estimate requests daily and the online scheduler keeps our team organized.",
  },
];

const FAQS = [
  {
    question: "What does the low startup fee include?",
    answer:
      "Strategy, copywriting, design, development, launch setup, and a lead capture system built for contractors.",
  },
  {
    question: "What's included in the monthly plan?",
    answer:
      "Hosting, security, performance monitoring, SEO essentials, and ongoing updates that keep leads coming in.",
  },
  {
    question: "Can you plug into my existing CRM or calendar?",
    answer:
      "Yes. We connect to your preferred tools for scheduling, quotes, and follow-ups.",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">ContractorFlow</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <button className="button button-primary">Book a call</button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="pill">Websites for contractors</p>
            <h1>Build a killer site that keeps your crews booked.</h1>
            <p className="hero-subtitle">
              We build contractor websites that turn homeowners into calls, quotes, and appointments. Pay
              a low setup fee, then a premium monthly plan that keeps leads flowing.
            </p>
            <div className="hero-actions">
              <button className="button button-primary">Get my website</button>
              <button className="button button-ghost">View contractor demos</button>
            </div>
            <div className="hero-stats">
              <div>
                <h3>7 days</h3>
                <span>Average launch</span>
              </div>
              <div>
                <h3>3x</h3>
                <span>More estimate requests</span>
              </div>
              <div>
                <h3>150+</h3>
                <span>Contractor sites shipped</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span>Live snapshot</span>
              <span className="dot" />
            </div>
            <h2>Blue Ridge Contractors</h2>
            <p>"We make storm-damaged homes feel brand new."</p>
            <ul>
              <li>Same-week inspections</li>
              <li>Online booking + quote form</li>
              <li>Service area radius map</li>
            </ul>
            <div className="hero-card-footer">
              <div>
                <p className="label">Monthly plan</p>
                <p className="price">$499/mo</p>
              </div>
              <div>
                <p className="label">Setup fee</p>
                <p className="price">$499</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="features">
        <div className="section-heading">
          <h2>Everything contractors need to win more local jobs</h2>
          <p>
            Built for roofers, floor installers, painters, landscapers, HVAC, plumbers, concrete crews,
            siding teams, and remodelers who want more booked jobs.
          </p>
        </div>
        <div className="card-grid">
          {FEATURES.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
        <div className="card-grid">
          {[
            "Roofing, siding, gutters",
            "Flooring & tile installs",
            "Concrete, masonry, patios",
            "HVAC & electrical service",
            "Remodeling & additions",
            "Landscaping & hardscape",
          ].map((trade) => (
            <article className="card" key={trade}>
              <h3>{trade}</h3>
              <p>
                Service pages built for your specific jobs, so homeowners know exactly what you do and how
                to hire you.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark" id="process">
        <div className="section-heading">
          <h2>Launch in days, not months</h2>
          <p>We handle the heavy lifting so you can stay focused on the job site.</p>
        </div>
        <div className="process-grid">
          {PROCESS.map((item) => (
            <div className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-heading">
          <h2>Pricing built for long-term monthly growth</h2>
          <p>Keep the upfront fee low, then invest in a stronger monthly plan that drives steady leads.</p>
        </div>
        <div className="pricing">
          <div className="pricing-card">
            <h3>Launch Setup</h3>
            <p className="price">$499</p>
            <p className="caption">Low upfront fee</p>
            <ul>
              <li>Custom design + copywriting</li>
              <li>Service pages tailored to your trade</li>
              <li>Lead capture + quote form</li>
              <li>Call tracking + analytics</li>
            </ul>
            <button className="button button-primary">Reserve a build</button>
          </div>
          <div className="pricing-card featured">
            <div className="badge">Most popular</div>
            <h3>Growth Care</h3>
            <p className="price">$499/mo</p>
            <p className="caption">Premium monthly plan</p>
            <ul>
              <li>Hosting, security, and updates</li>
              <li>Monthly SEO checkups</li>
              <li>4 content or design updates</li>
              <li>Lead + performance reporting</li>
            </ul>
            <button className="button button-dark">Start the plan</button>
          </div>
          <div className="pricing-card">
            <h3>Multi-Crew</h3>
            <p className="price">$749/mo</p>
            <p className="caption">For multi-crew teams</p>
            <ul>
              <li>Everything in Growth Care</li>
              <li>Priority support + 6 updates</li>
              <li>Local service ads prep</li>
              <li>Review & reputation support</li>
            </ul>
            <button className="button button-primary">Scale faster</button>
          </div>
        </div>
      </section>

      <section className="section testimonial" id="testimonials">
        <div className="section-heading">
          <h2>Contractors love the results</h2>
          <p>Real feedback from trades who needed more calls and booked appointments.</p>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <p className="quote">“{testimonial.quote}”</p>
              <p className="author">{testimonial.name}</p>
              <span>{testimonial.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading">
          <h2>Questions? We’ve got answers.</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((faq) => (
            <div className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div>
          <h2>Ready for a contractor site that books jobs?</h2>
          <p>Tell us about your business and we’ll send a launch plan within 24 hours.</p>
        </div>
        <button className="button button-dark">Get started</button>
      </section>

      <footer className="footer">
        <div>
          <h3>ContractorFlow</h3>
          <p>Websites & monthly growth plans for hardworking contractors.</p>
        </div>
        <div>
          <p>hello@contractorflow.com</p>
          <p>(555) 214-3322</p>
        </div>
        <div>
          <p>Based in Austin, serving teams nationwide.</p>
          <p>© 2024 ContractorFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
