function Pricing() {
  return (
    <section id="pricing" className="section">
      <h2>Service Pricing</h2>

      <div className="card-container pricing-grid">

        <div className="card price-card">
          <h3>Chimney Basic Service</h3>
          <p>₹599</p>
        </div>

        <div className="card price-card">
          <h3>Chimney Deep Cleaning</h3>
          <p>₹1199</p>
        </div>

        <div className="card price-card">
          <h3>HOB Four Burner Cleaning</h3>
          <p>₹850</p>
        </div>

        <div className="card price-card">
          <h3>Microwave Service</h3>
          <p>₹499</p>
        </div>

        <div className="card price-card">
          <h3>OTG Service</h3>
          <p>₹699</p>
        </div>

        <div className="card price-card">
          <h3>Visit & Checking Charges</h3>
          <p>₹299</p>
        </div>

        <div className="card price-card ro-card">
          <span className="ro-badge">💧 RO</span>
          <h3>RO Service & Filter Change</h3>
          <p>₹499</p>
        </div>

        <div className="card price-card ro-card">
          <span className="ro-badge">💧 RO</span>
          <h3>RO Installation (New)</h3>
          <p>₹799</p>
        </div>

        <div className="card price-card ro-card">
          <span className="ro-badge">💧 RO</span>
          <h3>RO Repair & Maintenance</h3>
          <p>₹599</p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
