function Brands() {
  const chimneyBrands = ["Faber", "Elica", "Glen", "Kaff", "Hindware", "Prestige", "Sunflame", "Whirlpool", "Bosch", "Hafele", "Kutchina", "Propello", "Croma", "Carysil", "Pigeon", "Robam"];
  const roBrands = ["Kent", "Aquaguard", "Pureit", "Livpure", "HUL", "Eureka Forbes", "Blue Star", "Whirlpool", "Tata Swach", "V-Guard"];

  return (
    <section className="section brands-section">
      <h2>Brands We Service</h2>

      <div className="brands-grid">
        <div className="brand-group">
          <h3>🔥 Chimney & Appliances</h3>
          <div className="brand-tags">
            {chimneyBrands.map((b, i) => (
              <span key={i} className="brand-chip">{b}</span>
            ))}
          </div>
        </div>

        <div className="brand-group">
          <h3>💧 RO Water Purifiers</h3>
          <div className="brand-tags">
            {roBrands.map((b, i) => (
              <span key={i} className="brand-chip ro-chip">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
