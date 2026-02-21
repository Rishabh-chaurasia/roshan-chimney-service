function Services() {

  const services = [
    "Chimney Service",
    "HOB Cleaning",
    "Gas Stove Repair",
    "Microwave Repair",
    "OTG Service"
  ];

  return (
    <section id="services" className="section">

      <h2>Services We Offer</h2>

      <div className="uc-services">

        {services.map((s,i)=>(
          <div key={i} className="uc-card">
            <h3>{s}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;
