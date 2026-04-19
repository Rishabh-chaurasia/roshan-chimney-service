function ROService() {
  return (
    <section className="section ro-section" id="ro-service">

      <div className="ro-header">
        <span className="ro-tag">💧 New Service</span>
        <h2>RO Water Purifier Service & Installation</h2>
        <p className="ro-subtitle">
          Clean water is essential. Our trained technicians service, repair and install
          all major RO brands — Kent, Aquaguard, Pureit, HUL, Livpure & more.
        </p>
      </div>

      <div className="ro-grid">

        <div className="ro-image-col">
          <img
            src="/roservice.jpg"
            alt="RO water purifier service"
            className="ro-main-img"
          />
          <div className="ro-img-row">
            <img src="/roinstall.jpg" alt="RO installation" />
            <img src="/filter.jpg"    alt="RO filter replacement" />
          </div>
        </div>

        <div className="ro-features-col">

          <div className="ro-feature-card">
            <span className="ro-icon">🔧</span>
            <div>
              <h3>RO Service & Filter Change</h3>
              <p>Complete RO system check, membrane replacement, filter change, and sanitization. Starting ₹499.</p>
            </div>
          </div>

          <div className="ro-feature-card">
            <span className="ro-icon">🚰</span>
            <div>
              <h3>New RO Installation</h3>
              <p>Full installation of your new RO system — wall mount, pipe fitting, TDS check & demo. Starting ₹799.</p>
            </div>
          </div>

          <div className="ro-feature-card">
            <span className="ro-icon">⚡</span>
            <div>
              <h3>RO Repair</h3>
              <p>Low pressure, leakage, no water, bad taste — we diagnose and fix all RO problems. Starting ₹599.</p>
            </div>
          </div>

          <div className="ro-brands">
            <h4>Brands We Service</h4>
            <div className="ro-brand-tags">
              {["Kent", "Aquaguard", "Pureit", "Livpure", "HUL", "Eureka Forbes", "Blue Star", "Whirlpool"].map((b, i) => (
                <span key={i} className="brand-tag">{b}</span>
              ))}
            </div>
          </div>

          <a href="https://wa.me/916206554739?text=I need RO service" className="ro-book-btn">
            💧 Book RO Service Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default ROService;
