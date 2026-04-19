function HowItWorks() {
  const steps = [
    { num: "1", icon: "📲", title: "Book Online or Call", desc: "Fill the form, WhatsApp, or call us directly. Takes under 2 minutes." },
    { num: "2", icon: "📞", title: "We Call in 30 Min", desc: "Our team confirms your booking and slot within 30 minutes of request." },
    { num: "3", icon: "🚗", title: "Technician Arrives", desc: "Verified expert reaches your home at the scheduled time with all tools." },
    { num: "4", icon: "✅", title: "Service Done", desc: "Chimney, RO, or appliance serviced to satisfaction. You approve before we leave." },
  ];

  return (
    <section className="section how-section">
      <h2>How It Works</h2>
      <div className="how-steps">
        {steps.map((s, i) => (
          <div key={i} className="how-step">
            <div className="how-num">{s.num}</div>
            <div className="how-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
