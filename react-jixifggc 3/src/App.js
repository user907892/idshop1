import React from "react";
import "./style.css";

const FEATURES = [
  {
    title: "Contractor-first websites",
    description:
      "We build modern, conversion-focused sites that speak to homeowners and help you win more jobs.",
  },
  {
    title: "Fast launch",
    description:
      "Go from intake to live site in as little as 7 days with our streamlined onboarding.",
  },
  {
    title: "Lead capture built in",
    description:
      "Smart forms, click-to-call, and quote requests that drop straight into your inbox.",
  },
  {
    title: "Monthly growth plan",
    description:
      "Ongoing updates, SEO essentials, and performance monitoring to keep leads flowing.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We learn your trade, service area, and dream customers so your site speaks their language.",
  },
  {
    step: "02",
    title: "Build & design",
    description:
      "Our team writes the copy, designs the layout, and composes visuals that match your brand.",
  },
  {
    step: "03",
    title: "Launch & grow",
    description:
      "We publish, connect analytics, and keep optimizing with your monthly plan.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marco T.",
    role: "Roofing Contractor",
    quote:
      "Booked 11 estimates in the first two weeks. The site looks premium and the lead form works."
  },
  {
    name: "Kayla S.",
    role: "Remodeling Team",
    quote:
      "The startup fee was fair and the monthly plan keeps everything fresh. We finally look legit online."
  },
  {
    name: "Dion P.",
    role: "Landscaping Pro",
    quote:
      "They nailed the copy and made it super easy for clients to request quotes."
  },
];

const FAQS = [
  {
    question: "What does the startup fee cover?",
    answer:
      "The startup fee includes strategy, copywriting, design, development, and launch setup. It's a one-time cost to get you online fast.",
  },
  {
    question: "What's included in the monthly plan?",
    answer:
      "Hosting, security, updates, SEO essentials, analytics reporting, and continuous improvements based on your goals.",
  },
  {
    question: "Can you work with my existing branding?",
    answer:
      "Absolutely. We can build from scratch or refresh your existing colors, logo, and photography.",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">BuildSolid</div>
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
            <h1>
              A banger website that turns local homeowners into booked jobs.
            </h1>
            <p className="hero-subtitle">
              We help contractors launch stunning, high-converting websites with a simple startup fee and a
              low monthly plan that keeps leads coming.
            </p>
            <div className="hero-actions">
              <button className="button button-primary">Get my website</button>
              <button className="button button-ghost">See sample sites</button>
            </div>
            <div className="hero-stats">
              <div>
                <h3>7 days</h3>
                <span>Average launch</span>
              </div>
              <div>
                <h3>+38%</h3>
                <span>Lead lift</span>
              </div>
              <div>
                <h3>120+</h3>
                <span>Contractor sites</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span>Live snapshot</span>
              <span className="dot" />
            </div>
            <h2>Evergreen Remodeling</h2>
            <p>"We turn outdated kitchens into the heart of your home."</p>
            <ul>
              <li>Same-week estimates</li>
              <li>Before/after gallery</li>
              <li>Online quote request</li>
            </ul>
            <div className="hero-card-footer">
              <div>
                <p className="label">Monthly plan</p>
                <p className="price">$249/mo</p>
              </div>
              <div>
                <p className="label">Startup fee</p>
                <p className="price">$899</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="features">
        <div className="section-heading">
          <h2>Everything you need to win more local jobs</h2>
          <p>Designed for roofers, remodelers, HVAC, painters, landscapers, and every trade in between.</p>
        </div>
        <div className="card-grid">
          {FEATURES.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark" id="process">
        <div className="section-heading">
          <h2>Launch in days, not months</h2>
          <p>We handle the hard stuff while you stay focused on the job site.</p>
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
          <h2>Simple pricing that keeps you growing</h2>
          <p>Pay a small startup fee, then a predictable monthly plan for ongoing support and growth.</p>
        </div>
        <div className="pricing">
          <div className="pricing-card">
            <h3>Launch Package</h3>
            <p className="price">$899</p>
            <p className="caption">One-time startup fee</p>
            <ul>
              <li>Custom design + copywriting</li>
              <li>Service pages tailored to your trade</li>
              <li>Lead capture + quote form</li>
              <li>Google Analytics setup</li>
            </ul>
            <button className="button button-primary">Reserve a slot</button>
          </div>
          <div className="pricing-card featured">
            <div className="badge">Most popular</div>
            <h3>Growth Plan</h3>
            <p className="price">$249/mo</p>
            <p className="caption">Monthly plan</p>
            <ul>
              <li>Hosting, security, and updates</li>
              <li>Monthly SEO checkups</li>
              <li>2 content or design updates</li>
              <li>Performance reporting</li>
            </ul>
            <button className="button button-dark">Start the plan</button>
          </div>
          <div className="pricing-card">
            <h3>Accelerate</h3>
            <p className="price">$399/mo</p>
            <p className="caption">For multi-crew teams</p>
            <ul>
              <li>Everything in Growth</li>
              <li>Priority support + 4 updates</li>
              <li>Local service ads prep</li>
              <li>Reputation management</li>
            </ul>
            <button className="button button-primary">Scale faster</button>
          </div>
        </div>
      </section>

      <section className="section testimonial" id="testimonials">
        <div className="section-heading">
          <h2>Contractors love the results</h2>
          <p>Real feedback from trades who wanted a better web presence.</p>
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
          <h2>Ready for a website that wins jobs?</h2>
          <p>
            Tell us about your business and we’ll send a launch plan within 24 hours.
          </p>
        </div>
        <button className="button button-dark">Get started</button>
      </section>

      <footer className="footer">
        <div>
          <h3>BuildSolid</h3>
          <p>Websites & growth plans for hardworking contractors.</p>
        </div>
        <div>
          <p>hello@buildsolid.com</p>
          <p>(555) 230-8080</p>
        </div>
        <div>
          <p>Based in Denver, serving teams nationwide.</p>
          <p>© 2024 BuildSolid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
