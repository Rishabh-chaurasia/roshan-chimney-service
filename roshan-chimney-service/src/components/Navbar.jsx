import { useState } from "react";

function Navbar() {

  const [open,setOpen] = useState(false);

  return (
    <header className="navbar">

      <h2>Roshan Chimney Service</h2>

      <div className="menu-toggle" onClick={()=>setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? "nav-links active" : "nav-links"}>

        <a href="#services" onClick={()=>setOpen(false)}>Services</a>
        <a href="#pricing" onClick={()=>setOpen(false)}>Pricing</a>
        <a href="#reviews" onClick={()=>setOpen(false)}>Reviews</a>
        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

      </nav>

    </header>
  );
}

export default Navbar;
