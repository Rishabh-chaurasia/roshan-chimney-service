import { useState } from "react";
import emailjs from "@emailjs/browser";

function BookingForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_lz5mtia",
      "template_1jhtj5b",
      {
        user_name: form.name,
        user_phone: form.phone,
        user_email: form.email,
        message: `${form.service} booking in ${form.area}`
      },
      "CGu4BsCALufnWOH4G"
    )
    .then(() => {

      alert("Booking sent successfully");

      // ✅ GOOGLE ADS CONVERSION TRACKING (MOST IMPORTANT)
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17974415881/ymCdCODduoscEImk7_pC' // 
        });

        // ✅ OPTIONAL (helps Google AI optimize faster)
        window.gtag('event', 'generate_lead', {
          value: 1,
          currency: 'INR'
        });
      }

      // ✅ WhatsApp redirect (only after success)
      window.open(
        `https://wa.me/916206554739?text=Booking Request: ${form.service} in ${form.area}`,
        "_blank"
      );

      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        area: ""
      });

    })
    .catch((error) => {
      console.error(error);
      alert("Email failed — check EmailJS settings");
    });
  };

  return (
    <section className="section">

      <h2>Book Service</h2>

      <form onSubmit={handleSubmit} className="booking-form">

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Chimney Basic Service</option>
          <option>Chimney Deep Cleaning</option>
          <option>HOB Service</option>
          <option>Microwave Repair</option>
          <option>Oven Service</option>
          <option>RO Service & Filter Change</option>
          <option>RO Installation</option>
          <option>RO Repair</option>
        </select>

        <input
          name="area"
          placeholder="Your Area"
          value={form.area}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm Booking</button>

      </form>

    </section>
  );
}

export default BookingForm;