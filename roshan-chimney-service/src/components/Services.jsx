function Services() {

  const services = [
    { name: "Chimney Service", icon: "🔥", desc: "Deep cleaning & repair for all chimney brands" },
    { name: "HOB Cleaning", icon: "🍳", desc: "4-burner & 2-burner HOB cleaning & servicing" },
    { name: "Gas Stove Repair", icon: "🔧", desc: "Complete gas stove repair & maintenance" },
    { name: "Microwave Repair", icon: "📡", desc: "All brands microwave service & repair" },
    { name: "Oven Service", icon: "🥘", desc: "OTG & oven repair by expert technicians" },
    { name: "RO Service", icon: "💧", desc: "Full RO purifier service, filter change & repair" },
    { name: "RO Installation", icon: "🚰", desc: "New RO system installation at your home" },
  ];

  return (
    <section id="services" className="section">

      <h2>Services We Offer</h2>

      <div className="uc-services">

        {services.map((s, i) => (
          <div key={i} className="uc-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;
