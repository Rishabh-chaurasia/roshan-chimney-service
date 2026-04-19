function WhyChoose() {
  const reasons = [
    { icon: "🔧", title: "Expert Technicians", desc: "Trained professionals for chimney, RO, HOB, microwave & oven — all under one service." },
    { icon: "💰", title: "Transparent Pricing", desc: "Fixed rates shown upfront. No hidden charges. What we quote is what you pay." },
    { icon: "⚡", title: "Same Day Service", desc: "Book before noon, get service the same day. We call within 30 minutes of booking." },
    { icon: "💧", title: "RO Specialists", desc: "Kent, Aquaguard, Pureit, Livpure — we service & install all major RO brands." },
    { icon: "🛡️", title: "Service Guarantee", desc: "All work comes with a service guarantee. Not satisfied? We come back and fix it." },
    { icon: "📍", title: "Covering All NCR", desc: "Delhi, Noida, Gurgaon, Ghaziabad, Greater Noida, Faridabad — we come to you." },
  ];

  return (
    <section className="section">
      <h2>Why Choose Roshan Service</h2>
      <div className="uc-services">
        {reasons.map((r, i) => (
          <div key={i} className="uc-card">
            <div className="service-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
