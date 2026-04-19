import { useState, useEffect } from "react";

function Reviews() {
  const reviews = [
    { text: "Chimney was completely blocked. Roshan's technician cleaned it perfectly in under an hour. Very professional!", name: "Amit K.", area: "Noida", stars: 5 },
    { text: "Got my Kent RO serviced and filter changed. On time, very clean work. Will book again.", name: "Priya S.", area: "Delhi", stars: 5 },
    { text: "Quick response and affordable pricing. Fixed my HOB burner same day. Highly recommend!", name: "Rajesh M.", area: "Gurgaon", stars: 5 },
    { text: "Had RO installed at home. The technician explained everything and cleaned up after. Great service.", name: "Neha T.", area: "Greater Noida", stars: 5 },
    { text: "Excellent chimney deep cleaning. The suction is like new now. Transparent pricing, no surprises.", name: "Suresh P.", area: "Ghaziabad", stars: 5 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const r = reviews[index];

  return (
    <section id="reviews" className="section">
      <h2>What Our Customers Say</h2>

      <div className="review-box">
        <div className="review-stars">{"⭐".repeat(r.stars)}</div>
        <p className="review-text">"{r.text}"</p>
        <div className="review-author">— {r.name}, {r.area}</div>
      </div>

      <div className="review-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
