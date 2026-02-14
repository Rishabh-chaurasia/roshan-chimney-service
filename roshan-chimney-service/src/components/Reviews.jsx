import { useState, useEffect } from "react";

function Reviews() {

  const reviews = [
    "Excellent service. Chimney working perfectly now! - Amit",
    "Very professional and affordable service. - Neha",
    "Quick response and clean work. Highly recommended. - Raj"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section id="reviews" className="section">
      <h2>Customer Reviews</h2>

      <div className="review-box">
        {reviews[index]}
      </div>

    </section>
  );
}

export default Reviews;
