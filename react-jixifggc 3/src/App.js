import React from "react";
import "./style.css";

const LINKS = {
  yelp: "https://www.yelp.com/biz/city-boy-burgers-anchorage",
  googleReviews:
    "https://www.google.com/search?q=city+boy+burgers+menu#lrd=0x56c897975ac90823:0x10d29e381cfee547,1,,,,",
  instagram: "https://www.instagram.com/cityboy_burgers/?hl=en",
  facebook: "https://www.facebook.com/p/City-Boy-Burgers-61561564359963/",
  maps:
    "https://www.google.com/maps?q=3024%20Mountain%20View%20Dr%20%23108%2C%20Anchorage%2C%20AK%2099508",
};

const INFO = {
  name: "City Boy Smash Burgers",
  city: "Anchorage, AK",
  locationNote: "Glenn Square",
  address: "3024 Mountain View Dr #108, Anchorage, AK 99508",
  phoneDisplay: "(907) 854-3157",
  phoneHref: "tel:19078543157",
  hours: [
    ["Thursday", "5–11 PM"],
    ["Friday", "5 PM–3 AM"],
    ["Saturday", "5 PM–3 AM"],
    ["Sunday", "Closed"],
    ["Monday", "Closed (MLK Day)"],
    ["Tuesday", "5–11 PM"],
    ["Wednesday", "5–11 PM"],
  ],
};

const featured = [
  {
    name: "Double",
    price: "$13",
    tag: "Best Seller",
    desc: "Two smashed patties, American cheese, pickles, house sauce, brioche bun.",
    img: "/images/burger.jpg",
  },
  {
    name: "Jalapeño Boy",
    price: "$13",
    tag: "🔥 Best Seller",
    desc: "1/4 lb beef, American cheese, fresh jalapeños, house sauce, brioche bun.",
    img: "/images/jalapeno-boy-1.jpg",
    photos: ["/images/jalapeno-boy-1.jpg", "/images/jalapeno-boy-2.jpg"],
  },
  {
    name: "All-American Patty Melt",
    price: "$15",
    tag: "Best Seller",
    desc: "1/4 lb beef, American cheese, caramelized onions, house sauce, brioche toast.",
    img: "/images/storefront.jpg",
  },
];

const menu = [
  {
    category: "Signature Burgers",
    items: [
      {
        name: "Single",
        price: "$11.00",
        desc: "20% ground beef, American cheese, pickles, house sauce, brioche bun.",
      },
      {
        name: "Double",
        price: "$13.00",
        desc: "20% ground beef, American cheese, pickles, house sauce, brioche bun.",
        tag: "Best Seller",
      },
      {
        name: "Triple",
        price: "$15.00",
        desc: "20% ground beef, American cheese, pickles, house sauce, brioche bun.",
      },
      { name: "Fries", price: "$6.00", desc: "Crispy fries (ask for house sauce)." },
    ],
  },
  {
    category: "Specials",
    items: [
      {
        name: "Jalapeño Boy",
        price: "$13.00",
        desc: "1/4 lb beef, American cheese, fresh jalapeños, house sauce, brioche bun.",
        tag: "🔥 Best Seller",
        photos: ["/images/jalapeno-boy-1.jpg", "/images/jalapeno-boy-2.jpg"],
      },
      {
        name: "All-American Patty Melt",
        price: "$15.00",
        desc: "1/4 lb beef, American cheese, caramelized onions, house sauce, brioche toast.",
        tag: "Best Seller",
      },
    ],
  },
  {
    category: "Wings",
    items: [{ name: "Chicken Wings", price: "$20.00", desc: "10-piece wing platter served with fries." }],
  },
  {
    category: "Drinks",
    items: [
      { name: "Coke", price: "$2.50" },
      { name: "Coke Zero", price: "$2.50" },
      { name: "Sprite", price: "$2.50" },
      { name: "Fanta", price: "$2.50" },
      { name: "Water", price: "$2.50" },
    ],
  },
];

const reviews = [
  {
    name: "Local Guide",
    quote: "Service is always a 10/10 and of course the food always hits the spot!",
    source: "Google Reviews (featured)",
  },
  {
    name: "Anchorage Eats",
    quote: "The fries were crispy perfection, and that house sauce??",
    source: "Google Reviews (featured)",
  },
  {
    name: "Late Night Crew",
    quote: "Staff is friendly, welcoming, and quick—even when the place is busy.",
    source: "Google Reviews (featured)",
  },
];

function Modal({ open, title, photos = [], onClose }) {
  if (!open) return null;
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <div>
            <div className="modalTitle">{title}</div>
            <div className="muted">Swipe-worthy. Tap outside to close.</div>
          </div>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="modalGrid">
          {photos.map((src, i) => (
            <img className="modalImg" key={i} src={src} alt={`${title} ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Section({ id, kicker, title, sub, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <div className="sectionHead">
          {kicker ? <div className="kicker">{kicker}</div> : null}
          <h2 className="h2">{title}</h2>
          {sub ? <p className="muted lead">{sub}</p> : null}
          <div className="accentLine" />
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [modal, setModal] = React.useState({ open: false, title: "", photos: [] });

  const openPhotos = (title, photos) => setModal({ open: true, title, photos: photos || [] });
  const closePhotos = () => setModal({ open: false, title: "", photos: [] });

  return (
    <>
      <header className="nav">
        <div className="wrap navRow">
          <div className="brand">
            <img src="/images/logo.png" alt="City Boy Burgers logo" />
            <div className="brandText">
              <div className="brandName">{INFO.name}</div>
              <div className="muted">
                {INFO.city} • {INFO.locationNote}
              </div>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#featured">Featured</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>

          <div className="navCta">
            <a className="btn ghost" href={INFO.phoneHref}>
              Call
            </a>
            <a className="btn primary" href="#menu">
              View Menu
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroBg" aria-hidden="true" />
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <div className="pillRow">
                <span className="pill">Located in Glenn Square</span>
                <span className="pill soft">Late-night weekends</span>
              </div>

              <h1 className="h1">
                DO YOU WANT TO <span className="hot">SMASH?</span>
              </h1>

              <p className="lead muted">
                Burger perfection in Anchorage — smashed patties, crispy edges, brioche buns,
                and that house sauce that keeps people coming back.
              </p>

              <div className="ctaRow">
                <a className="btn primary" href="#featured">
                  See Best Sellers
                </a>
                <a className="btn ghost" href={LINKS.maps} target="_blank" rel="noreferrer">
                  Directions
                </a>
                <a className="btn ghost" href={INFO.phoneHref}>
                  Call {INFO.phoneDisplay}
                </a>
              </div>

              <div className="socialRow">
                <a className="social" href={LINKS.googleReviews} target="_blank" rel="noreferrer">
                  <span className="dot google" /> Google Reviews
                </a>
                <a className="social" href={LINKS.yelp} target="_blank" rel="noreferrer">
                  <span className="dot yelp" /> Yelp
                </a>
                <a className="social" href={LINKS.instagram} target="_blank" rel="noreferrer">
                  <span className="dot ig" /> Instagram
                </a>
                <a className="social" href={LINKS.facebook} target="_blank" rel="noreferrer">
                  <span className="dot fb" /> Facebook
                </a>
              </div>

              <div className="address muted">{INFO.address}</div>
            </div>

            <div className="heroMedia">
              <div className="heroCard">
                <img src="/images/hero.jpg" alt="City Boy Burgers hero" />
                <div className="heroCardOverlay">
                  <div className="miniTitle">Open late • Made fresh</div>
                  <div className="miniSub">Smash burgers, fries, wings</div>
                </div>
              </div>

              <div className="miniGrid">
                <img src="/images/burger.jpg" alt="Burger" />
                <img src="/images/storefront.jpg" alt="Storefront" />
                <img src="/images/grill.jpg" alt="Grill" />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="featured"
          kicker="Featured"
          title="Best Sellers"
          sub="These are the top picks people come back for. Tap Jalapeño Boy for photos."
        >
          <div className="cardGrid">
            {featured.map((it) => (
              <button
                key={it.name}
                className="foodCard"
                type="button"
                onClick={() => (it.photos?.length ? openPhotos(it.name, it.photos) : null)}
              >
                <div className="foodImg">
                  <img src={it.img} alt={it.name} />
                  <div className="foodTop">
                    <Chip>{it.tag}</Chip>
                    <div className="price">{it.price}</div>
                  </div>
                </div>
                <div className="foodBody">
                  <div className="foodName">
                    {it.name} {it.photos?.length ? <span className="tapHint">• Tap for photos</span> : null}
                  </div>
                  <div className="muted">{it.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="centerRow">
            <a className="btn primary" href="#menu">
              Full Menu
            </a>
            <a className="btn ghost" href={INFO.phoneHref}>
              Call to order
            </a>
          </div>
        </Section>

        <Section
          id="menu"
          kicker="Menu"
          title="Built simple. Hits hard."
          sub="Fast to read on mobile. Prices easy to update."
        >
          <div className="menuGrid">
            {menu.map((block) => (
              <div className="menuCard" key={block.category}>
                <div className="menuCardTop">
                  <div className="menuTitle">{block.category}</div>
                </div>

                <div className="menuList">
                  {block.items.map((item) => (
                    <div className="menuItem" key={item.name}>
                      <div className="menuLeft">
                        <div className="menuNameRow">
                          <div className="menuName">{item.name}</div>
                          {item.tag ? <Chip>{item.tag}</Chip> : null}
                          {item.photos?.length ? (
                            <button
                              className="photoBtn"
                              type="button"
                              onClick={() => openPhotos(item.name, item.photos)}
                            >
                              View photos
                            </button>
                          ) : null}
                        </div>
                        {item.desc ? <div className="muted">{item.desc}</div> : null}
                      </div>
                      <div className="menuPrice">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="centerRow">
            <a className="btn primary" href={LINKS.googleReviews} target="_blank" rel="noreferrer">
              View Menu on Google
            </a>
            <a className="btn ghost" href={LINKS.yelp} target="_blank" rel="noreferrer">
              View on Yelp
            </a>
          </div>
        </Section>

        <Section
          id="owner"
          kicker="Our Story"
          title="Local. Hands-on. Built for the community."
          sub="Swap this text with the owner’s real story when you’re ready."
        >
          <div className="storyGrid">
            <div className="storyCard">
              <img src="/images/owner.jpg" alt="Owner" />
            </div>
            <div className="storyText">
              <h3 className="h3">From City Boy Burgers</h3>
              <p className="muted lead">
                “Open until we sell out! We serve crave-worthy burgers made fresh, fast, and full of flavor.
                Crispy edges, melty cheese, and the fixings — comfort food done right.”
              </p>

              <div className="ctaRow">
                <a className="btn primary" href={INFO.phoneHref}>
                  Call
                </a>
                <a className="btn ghost" href={LINKS.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="reviews"
          kicker="Reviews"
          title="People are talking"
          sub="Featured quotes — tap through to read more on Google or Yelp."
        >
          <div className="reviewGrid">
            {reviews.map((r, i) => (
              <div className="reviewCard" key={i}>
                <div className="reviewTop">
                  <div className="avatar">{r.name.slice(0, 1)}</div>
                  <div>
                    <div className="reviewName">{r.name}</div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <div className="reviewQuote">“{r.quote}”</div>
                <div className="muted">{r.source}</div>
              </div>
            ))}
          </div>

          <div className="centerRow">
            <a className="btn primary" href={LINKS.googleReviews} target="_blank" rel="noreferrer">
              View all Google reviews
            </a>
            <a className="btn ghost" href={LINKS.yelp} target="_blank" rel="noreferrer">
              View on Yelp
            </a>
          </div>
        </Section>

        <Section id="visit" kicker="Visit" title="One location. Easy to find." sub="Hours, address, and directions — done.">
          <div className="visitGrid">
            <div className="visitCard">
              <div className="visitName">{INFO.name}</div>
              <div className="muted">{INFO.address}</div>

              <div className="ctaRow" style={{ marginTop: 14 }}>
                <a className="btn primary" href={LINKS.maps} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
                <a className="btn ghost" href={INFO.phoneHref}>
                  Call
                </a>
              </div>

              <div className="hours">
                {INFO.hours.map(([d, t]) => (
                  <div key={d} className="hourRow">
                    <div>{d}</div>
                    <div className="muted">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="visitCard alt">
              <div className="visitName">Follow City Boy</div>
              <div className="muted">Daily specials, updates, and food pics.</div>

              <div className="socialStack">
                <a className="socialBig" href={LINKS.instagram} target="_blank" rel="noreferrer">
                  <span className="dot ig" /> Instagram
                </a>
                <a className="socialBig" href={LINKS.facebook} target="_blank" rel="noreferrer">
                  <span className="dot fb" /> Facebook
                </a>
                <a className="socialBig" href={LINKS.googleReviews} target="_blank" rel="noreferrer">
                  <span className="dot google" /> Google
                </a>
                <a className="socialBig" href={LINKS.yelp} target="_blank" rel="noreferrer">
                  <span className="dot yelp" /> Yelp
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="wrap footerRow">
            <div className="footerBrand">
              <img src="/images/logo.png" alt="Logo" />
              <div>
                <div className="brandName">{INFO.name}</div>
                <div className="muted">
                  {INFO.city} • {INFO.locationNote}
                </div>
              </div>
            </div>

            <div className="muted">© {new Date().getFullYear()} City Boy Burgers • Proposal draft</div>
          </div>
        </footer>

        <div className="mobileBar">
          <a className="mBtn primary" href="#menu">
            Menu
          </a>
          <a className="mBtn" href={INFO.phoneHref}>
            Call
          </a>
          <a className="mBtn" href={LINKS.maps} target="_blank" rel="noreferrer">
            Directions
          </a>
          <a className="mBtn" href={LINKS.googleReviews} target="_blank" rel="noreferrer">
            Reviews
          </a>
        </div>
      </main>

      <Modal open={modal.open} title={modal.title} photos={modal.photos} onClose={closePhotos} />
    </>
  );
}
