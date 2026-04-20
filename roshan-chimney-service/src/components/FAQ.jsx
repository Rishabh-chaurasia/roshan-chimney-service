import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      q: "What is the cost of chimney service in Delhi?",
      a: "Chimney basic service starts at ₹599 and deep cleaning at ₹1199 in Delhi NCR. Visit & checking charges are ₹299. All prices are fixed — no hidden charges."
    },
    {
      q: "Do you provide same day chimney service in Delhi?",
      a: "Yes! We provide same day chimney service in Delhi, Noida, Gurgaon, Ghaziabad and all NCR areas. Book before noon and get service the same day. We call within 30 minutes of booking."
    },
    {
      q: "Which chimney brands do you service?",
      a: "We service all major chimney brands — Faber, Elica, Glen, Kaff, Hindware, Prestige, Sunflame, Whirlpool, Bosch, Hafele, Kutchina, Propello, Croma, Carysil, Pigeon and Robam."
    },
    {
      q: "What is the cost of RO service in Delhi?",
      a: "RO service & filter change starts at ₹499. New RO installation starts at ₹799. RO repair starts at ₹599. All prices are transparent with no hidden charges."
    },
    {
      q: "Do you install new RO water purifiers at home?",
      a: "Yes — we provide complete RO installation at home across Delhi, Noida, Gurgaon and all NCR. Our technicians handle wall mounting, pipe fitting, TDS check and live demo."
    },
    {
      q: "Which RO brands do you service?",
      a: "We service all major RO brands — Kent, Aquaguard, Pureit, Livpure, HUL, Eureka Forbes, Blue Star, Whirlpool and Tata Swach."
    },
    {
      q: "How often should I get my chimney serviced?",
      a: "If you cook daily, chimney service every 3 months is ideal. For light use, every 6 months is fine. Regular cleaning prevents suction loss and fire hazards."
    },
    {
      q: "How often should I service my RO water purifier?",
      a: "Service your RO every 6 months and change filters annually. Regular servicing ensures safe drinking water, better taste and longer machine life."
    },
    {
      q: "Do you service in Noida, Gurgaon and Ghaziabad?",
      a: "Yes — we cover all NCR areas: Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad. Same day service available across all these locations."
    },
    {
      q: "Do you repair microwaves and OTG ovens?",
      a: "Yes — we repair all brands of microwave ovens and OTG in Delhi NCR. Microwave repair starts at ₹499. Same day service available."
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="section faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-sub">Everything you need to know about chimney service, RO service and repair in Delhi NCR</p>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
            <button
              className="faq-q"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{f.q}</span>
              <span className="faq-icon">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
