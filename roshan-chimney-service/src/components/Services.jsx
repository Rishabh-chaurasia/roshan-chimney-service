import { motion } from "framer-motion";

function Services() {

  const services = [
    {
      title: "Chimney Cleaning",
      desc: "Complete deep cleaning to remove oil and grease."
    },
    {
      title: "Chimney Repair",
      desc: "Motor, suction and filter repair service."
    },
    {
      title: "Chimney Installation",
      desc: "Professional installation for all chimney brands."
    }
  ];

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>

      <div className="card-container">

        {services.map((service, index) => (
          <motion.div
            className="card"
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Services;
