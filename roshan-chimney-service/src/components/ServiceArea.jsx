function ServiceArea() {
  const areas = [
    { name: "Delhi", icon: "🏙️" },
    { name: "Noida", icon: "🏢" },
    { name: "Greater Noida", icon: "🏗️" },
    { name: "Gurgaon", icon: "🏬" },
    { name: "Ghaziabad", icon: "🏘️" },
    { name: "Faridabad", icon: "🏭" },
  ];

  return (
    <section className="section">
      <h2>Service Areas — All NCR</h2>
      <p className="area-sub">Chimney cleaning, RO service & installation available across all these locations</p>
      <div className="area-grid">
        {areas.map((a, i) => (
          <div key={i} className="area-chip">
            <span>{a.icon}</span>
            <span>{a.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceArea;
