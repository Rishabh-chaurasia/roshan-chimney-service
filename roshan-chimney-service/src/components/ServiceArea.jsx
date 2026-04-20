function ServiceArea() {
  const areas = [
    { name: "Delhi",         icon: "🏙️", desc: "Chimney & RO service" },
    { name: "Noida",         icon: "🏢", desc: "Same day service" },
    { name: "Greater Noida", icon: "🏗️", desc: "All areas covered" },
    { name: "Gurgaon",       icon: "🏬", desc: "Fast response" },
    { name: "Ghaziabad",     icon: "🏘️", desc: "Doorstep service" },
    { name: "Faridabad",     icon: "🏭", desc: "Expert technicians" },
  ];

  return (
    <section className="section" id="service-area" aria-label="Service areas">
      <h2>Chimney & RO Service Areas in NCR</h2>
      <p className="area-sub">
        We provide chimney cleaning, chimney repair, RO service and RO installation across all these locations in Delhi NCR — same day service available.
      </p>
      <div className="area-grid">
        {areas.map((a, i) => (
          <div key={i} className="area-chip">
            <span>{a.icon}</span>
            <div>
              <strong>{a.name}</strong>
              <small>{a.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceArea;
