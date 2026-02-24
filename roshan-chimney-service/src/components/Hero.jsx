function Hero() {
  return (
    <section className="hero-booking">

      <div className="hero-left">

        <h1>Trusted Chimney Service & Repair for All Brands</h1>

        <p>Same day cleaning & repair by verified technician.</p>
<p>
We provide chimney repair near me, chimney cleaning Delhi,
chimney repair Noida and chimney service NCR with same day service.
</p>

        <div className="booking-box">

          <select>
            <option>Select Service</option>
            <option>Chimney Cleaning</option>
            <option>Chimney Repair</option>
            <option>HOB Service</option>
            <option>Microwave Repair</option>
            <option>OTG Service</option>
          </select>

          <input type="text" placeholder="Enter Phone Number" />

          <a
            href="https://wa.me/916206554739"
            className="book-btn"
          >
            Book Now
          </a>

          <small>⚡ We call within 30 minutes</small>

        </div>

      </div>

      <div className="hero-right">
        <img src="https://hometriangle.com/imagecache/media/523298/package.png"/>
      </div>
<div className="trust-strip">
  ⭐ 1000+ Customers Served
  ⚡ Same Day Service
  🔧 Verified Technician
  💰 Transparent Pricing
</div>

    </section>
  );
}

export default Hero;
