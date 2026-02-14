import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lz5mtia",
      "template_1jhtj5b",
      form.current,
      "CGu4BsCALufnWOH4G"
    )
    .then(() => {
      alert("Message Sent Successfully!");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <section id="contact" className="section">

      <h2>Contact Roshan</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <input
  type="tel"
  name="user_phone"
  placeholder="Phone Number"
  required
/>

        <textarea
          name="message"
          placeholder="Service Required"
          required
        />

        <button type="submit">Send Message</button>

      </form>

      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=greater noida&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;
