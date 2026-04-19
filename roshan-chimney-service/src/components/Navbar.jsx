import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">

      <h2>🔥 Roshan Chimney & RO Service</h2>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? "✕" : "☰"}
      </button>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#services"   onClick={close}>Services</a>
        <a href="#ro-service" onClick={close}>RO Service</a>
        <a href="#pricing"    onClick={close}>Pricing</a>
        <a href="#reviews"    onClick={close}>Reviews</a>
        <a href="#contact"    onClick={close}>Contact</a>
      </nav>

    </header>
  );
}

export default Navbar;
