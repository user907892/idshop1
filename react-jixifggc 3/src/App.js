import React, { useState } from "react";

// List of all 50 states
const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

function getPrice(qty) {
  if (qty >= 9) return 60;
  if (qty >= 3) return 80;
  return 100;
}
const BTC_ADDR = "bc1q29vf2yu6plwwc268am0ysl88c4dr0xkjrhlfcx";
const PAGES = [
  { key: "home", label: "Home" },
  { key: "order", label: "Order Instructions" },
  { key: "prices", label: "Prices" },
  { key: "reviews", label: "Reviews" },
  { key: "tips", label: "Tips" }
];

function OrderInstructionsPage() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #eee", padding: "36px 32px" }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 10 }}>Order Instructions</h2>
      <ol style={{ fontSize: 18, lineHeight: "2", marginTop: 18 }}>
        <li>Select the states and quantities you want.</li>
        <li>Fill out the ID information (name, DOB, address, height, weight, eye color, etc) when prompted.</li>
        <li><b>Upload a photo for your ID if you want it on your card.</b></li>
        <li><b>Signature will be automatically generated and made to look imperfect for realism.</b></li>
        <li>Review your cart and total price.</li>
        <li>Go to the checkout/payment page and send the exact amount in Bitcoin to <span style={{ fontFamily: "monospace", color: "#f7931a" }}>{BTC_ADDR}</span>.</li>
        <li>Include your email or Telegram handle with your payment, or message us at <a href="https://t.me/Fakelordak47Inc" target="_blank" rel="noopener noreferrer">Telegram</a> after payment.</li>
        <li>We will confirm payment and process your order ASAP.</li>
      </ol>
      <p style={{ color: "#999", fontSize: 15, marginTop: 18 }}>
        For help or questions, use the contact page or message us on Telegram!
      </p>
    </div>
  );
}

function PricePage() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #eee", padding: "36px 32px" }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 10 }}>Our Prices</h2>
      <ul style={{ fontSize: 18, lineHeight: "2", marginTop: 18 }}>
        <li>1-2 IDs: <b>$100</b> each (+$10 for extra copy)</li>
        <li>3-8 IDs: <b>$80</b> each (+$10 for extra copy)</li>
        <li>9+ IDs: <b>$60</b> each (+$10 for extra copy)</li>
      </ul>
      <p style={{ color: "#f37021", fontWeight: 700, marginTop: 16 }}>
        Bulk pricing applies automatically in your cart!
      </p>
      <p style={{ color: "#999", fontSize: 15, marginTop: 14 }}>
        All payments accepted in Bitcoin. Contact us for bulk deals or custom requests!
      </p>
    </div>
  );
}

function BTCOnlyPayment({ amountUSD, cartSummary, onBack }) {
  function copyBTC() {
    navigator.clipboard.writeText(BTC_ADDR);
    alert("BTC address copied to clipboard!");
  }
  return (
    <div style={{
      maxWidth: 600, margin: "40px auto", background: "#fff", borderRadius: 12,
      boxShadow: "0 2px 12px #eee", padding: "36px 32px", textAlign: "center"
    }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 10 }}>Checkout - Pay with Bitcoin</h2>
      <div style={{ marginBottom: 20 }}>
        <b>Order Summary:</b>
        <pre style={{ background: "#f7f7f7", padding: 12, borderRadius: 6, margin: "12px 0", textAlign: "left", whiteSpace: "pre-wrap" }}>
          {JSON.stringify(cartSummary, null, 2)}
        </pre>
        {/* Show photos if present */}
        <div>
          {cartSummary.map((item, idx) => item.photo ? (
            <div key={idx} style={{ margin: "10px 0" }}>
              <div style={{ fontWeight: 700 }}>{item.state} - {item.fullName}</div>
              <img src={item.photo} alt="ID photo" style={{ maxWidth: 120, borderRadius: 8, border: "1px solid #eee" }} />
            </div>
          ) : null)}
        </div>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 20, margin: "18px 0" }}>Send payment to:</h3>
      <div style={{
        background: "#f7f7f7", borderRadius: 8, padding: "18px 16px", fontSize: 18,
        display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10
      }}>
        <span style={{ fontWeight: 700, marginBottom: 8 }}>Bitcoin Address</span>
        <span style={{ fontFamily: "monospace", wordBreak: "break-all", marginBottom: 10 }}>
          {BTC_ADDR}
        </span>
        <button onClick={copyBTC} style={{
          background: "#f7931a", color: "#fff", border: "none", borderRadius: 6,
          fontWeight: 700, padding: "8px 18px", fontSize: 16, cursor: "pointer"
        }}>Copy BTC Address</button>
        <span style={{ color: "#888", fontSize: 14, marginTop: 8 }}>
          Send the exact amount and include your order info in the transaction note or send it via Telegram!
        </span>
        <div style={{ color: "#f37021", fontWeight: 700, marginTop: 12 }}>
          Amount to pay: ${amountUSD} (convert to BTC with <a href="https://www.google.com/search?q=USD+to+BTC" target="_blank" rel="noopener noreferrer">USD to BTC converter</a>)
        </div>
      </div>
      <button
        onClick={onBack}
        style={{ marginTop: 30, padding: "8px 22px", borderRadius: 7, background: "#eee", border: "none" }}
      >Back</button>
    </div>
  );
}

function ReviewsPage() {
  // ... unchanged ...
  // (Keep your ReviewsPage code the same)
  // For brevity, not repeated here
}

function TipsPage() {
  // ... unchanged ...
  // (Keep your TipsPage code the same)
  // For brevity, not repeated here
}

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState("");
  const [modalInfo, setModalInfo] = useState({
    fullName: "", dob: "", address: "", height: "", weight: "", eyeColor: "", extraCopy: false, photo: ""
  });
  const [showCheckout, setShowCheckout] = useState(false);

  function handleAdd(state) {
    setModalState(state);
    setModalInfo({ fullName: "", dob: "", address: "", height: "", weight: "", eyeColor: "", extraCopy: false, photo: "" });
    setShowModal(true);
  }
  function confirmAdd() {
    setCart(c => {
      const arr = c[modalState] ? [...c[modalState]] : [];
      arr.push({ ...modalInfo });
      return { ...c, [modalState]: arr };
    });
    setShowModal(false);
  }
  function handleRemove(state) {
    setCart(c => {
      const arr = c[state] ? [...c[state]] : [];
      arr.pop();
      if (arr.length === 0) {
        const next = { ...c };
        delete next[state];
        return next;
      }
      return { ...c, [state]: arr };
    });
  }
  function clear() {
    setCart({});
  }

  let totalQty = Object.values(cart).reduce((a, b) => a + b.length, 0);
  let subtotal = Object.entries(cart).reduce(
    (sum, [state, arr]) => sum + arr.reduce((acc, info) => acc + getPrice(arr.length) + (info.extraCopy ? 10 : 0), 0),
    0
  );

  const cartSummary = Object.entries(cart).map(([state, arr]) =>
    arr.map(info => ({
      state,
      ...info,
      price: getPrice(arr.length) + (info.extraCopy ? 10 : 0)
    }))
  ).flat();

  // Image upload handler
  function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        setModalInfo(m => ({ ...m, photo: ev.target.result }));
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <header style={{
        background: "#fff", borderBottom: "1px solid #eee", padding: "14px 0",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 30 }}>
          <span style={{ fontSize: 38, marginRight: 12 }}>🔫</span>
          <span style={{ fontWeight: 700, fontSize: 28, color: "#8a6d3b", fontFamily: "serif" }}>Fakelordak47</span>
        </div>
        <nav style={{ display: "flex", gap: 22, marginRight: 30 }}>
          {PAGES.map(tab => (
            <button
              key={tab.key}
              onClick={() => setPage(tab.key)}
              style={{
                background: page === tab.key ? "#f37021" : "#fff",
                color: page === tab.key ? "#fff" : "#222",
                fontWeight: page === tab.key ? 700 : 500,
                border: "none", padding: "10px 18px", borderRadius: 7, fontSize: 17, cursor: "pointer"
              }}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => setShowCheckout(true)}
            disabled={totalQty === 0}
            style={{
              background: "#635bff",
              color: "#fff",
              fontWeight: 700,
              marginLeft: 16,
              padding: "10px 18px",
              border: "none",
              borderRadius: 7,
              fontSize: 17,
              cursor: totalQty === 0 ? "not-allowed" : "pointer",
              opacity: totalQty === 0 ? 0.5 : 1
            }}
          >Checkout</button>
        </nav>
      </header>

      {page === "home" && (
        <main style={{
          maxWidth: 1200, margin: "40px auto", background: "#fff",
          borderRadius: 12, boxShadow: "0 2px 12px #eee", padding: "36px 32px"
        }}>
          <h2 style={{ fontSize: 22, marginBottom: 24, textAlign: "center", color: "#8a6d3b", fontWeight: 700 }}>
            Select State IDs to Order
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28
          }}>
            {STATES.map((state) => {
              const qty = cart[state]?.length || 0;
              const priceEach = getPrice(qty > 0 ? qty : 1);
              return (
                <div key={state} style={{
                  background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee",
                  padding: 16, textAlign: "center", border: "1px solid #eee"
                }}>
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{state}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{state} ID</div>
                  <div style={{ color: "#f37021", fontWeight: 700, fontSize: 16, margin: "6px 0" }}>
                    ${priceEach} {qty >= 3 ? "each (bulk)" : qty > 0 ? "each" : ""}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "10px 0" }}>
                    <button onClick={() => handleRemove(state)} disabled={qty === 0}>-</button>
                    <span style={{ fontSize: 17 }}>{qty}</span>
                    <button onClick={() => handleAdd(state)}>+</button>
                  </div>
                  <button
                    style={{
                      background: "#d9534f",
                      color: "#fff",
                      fontWeight: 700,
                      padding: "8px 22px",
                      borderRadius: 7,
                      border: "none",
                      textDecoration: "none",
                      fontSize: 15,
                      marginTop: 8,
                      cursor: "pointer"
                    }}
                    onClick={() => window.open("https://t.me/Fakelordak47Inc", "_blank")}
                    disabled={qty === 0}
                  >
                    Order Now
                  </button>
                </div>
              );
            })}
          </div>
          <div style={{
            margin: "40px auto 0 auto", maxWidth: 700, background: "#f7f7f7",
            borderRadius: 12, border: "1px solid #eee", padding: "24px 32px", textAlign: "center"
          }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
              Cart: {totalQty} IDs | Subtotal: ${subtotal}
            </div>
            <button onClick={clear} style={{ margin: "10px 0 0 0", padding: "7px 18px", borderRadius: 7, background: "#eee", border: "none" }}>Clear Cart</button>
            <div style={{ color: "#f37021", fontWeight: 700, fontSize: 15, marginTop: 8 }}>
              Pricing: 1 for $100, 3+ for $80/each, 9+ for $60/each (+ $10 for extra copy)
            </div>
          </div>
        </main>
      )}
      {page === "order" && <OrderInstructionsPage />}
      {page === "prices" && <PricePage />}
      {page === "reviews" && <ReviewsPage />}
      {page === "tips" && <TipsPage />}

      {showModal && (
        <div style={{
          position: "fixed", left: 0, top: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99
        }}>
          <div style={{
            background: "#fff", borderRadius: 14, padding: 30, minWidth: 350, maxWidth: "90vw", boxShadow: "0 2px 12px #ccc"
          }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 16 }}>Enter info for {modalState} ID</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <label>
                Full Name:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.fullName}
                  onChange={e => setModalInfo({ ...modalInfo, fullName: e.target.value })}
                  placeholder="John Doe"
                />
              </label>
              <label>
                Date of Birth:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.dob}
                  onChange={e => setModalInfo({ ...modalInfo, dob: e.target.value })}
                  placeholder="01/01/2000"
                />
              </label>
              <label>
                Address:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.address}
                  onChange={e => setModalInfo({ ...modalInfo, address: e.target.value })}
                  placeholder="123 Main St, City, State"
                />
              </label>
              <label>
                Height:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.height}
                  onChange={e => setModalInfo({ ...modalInfo, height: e.target.value })}
                  placeholder="5'10&quot;"
                />
              </label>
              <label>
                Weight:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.weight}
                  onChange={e => setModalInfo({ ...modalInfo, weight: e.target.value })}
                  placeholder="160 lbs"
                />
              </label>
              <label>
                Eye Color:
                <input
                  style={{ width: "100%", padding: 7, marginTop: 4 }}
                  value={modalInfo.eyeColor}
                  onChange={e => setModalInfo({ ...modalInfo, eyeColor: e.target.value })}
                  placeholder="Brown"
                />
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <input
                  type="checkbox"
                  checked={modalInfo.extraCopy}
                  onChange={e => setModalInfo({ ...modalInfo, extraCopy: e.target.checked })}
                />
                Extra copy? (+$10)
              </label>
              <label>
                Upload Photo:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  style={{ marginTop: 4 }}
                />
                {modalInfo.photo && (
                  <div>
                    <img src={modalInfo.photo} alt="Uploaded" style={{ maxWidth: 100, marginTop: 8, borderRadius: 6, border: "1px solid #eee" }} />
                  </div>
                )}
              </label>
            </div>
            <div style={{ color: "#f37021", marginTop: 16, fontSize: 15 }}>
              <b>Signature will be automatically generated and made to look imperfect for realism.</b>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 18 }}>
              <button onClick={() => setShowModal(false)} style={{ padding: "7px 18px", borderRadius: 7, background: "#eee", border: "none" }}>Cancel</button>
              <button
                style={{ padding: "7px 18px", borderRadius: 7, background: "#d9534f", color: "#fff", fontWeight: 700, border: "none" }}
                onClick={confirmAdd}
                disabled={
                  !modalInfo.fullName ||
                  !modalInfo.dob ||
                  !modalInfo.address ||
                  !modalInfo.height ||
                  !modalInfo.weight ||
                  !modalInfo.eyeColor
                }
              >Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {showCheckout && (
        <div style={{
          position: "fixed", left: 0, top: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999
        }}>
          <BTCOnlyPayment amountUSD={subtotal} cartSummary={cartSummary} onBack={() => setShowCheckout(false)} />
        </div>
      )}
    </div>
  );
}