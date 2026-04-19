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
      <h2>Contact Us</h2>

      <div className="contact-grid">

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="tel" name="user_phone" placeholder="Phone Number" required />
          <select name="service_type">
            <option value="">Select Service Type</option>
            <option>Chimney Cleaning</option>
            <option>Chimney Repair</option>
            <option>RO Service & Filter Change</option>
            <option>RO Installation</option>
            <option>RO Repair</option>
            <option>HOB Service</option>
            <option>Microwave Repair</option>
            <option>Oven Service</option>
          </select>
          <textarea name="message" placeholder="Describe your problem or requirement" rows={4} required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="contact-detail">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Call / WhatsApp</strong>
              <p><a href="tel:6206554739">6206554739</a></p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:roshan981058@gmail.com">roshan981058@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Service Area</strong>
              <p>Delhi, Noida, Gurgaon, Ghaziabad, Greater Noida, Faridabad</p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">🕐</span>
            <div>
              <strong>Working Hours</strong>
              <p>Mon – Sun: 8:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps?q=greater noida&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
