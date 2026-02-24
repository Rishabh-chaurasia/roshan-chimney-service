
import { useState, useEffect } from "react";

function Gallery() {

  const images = [
    "https://imgs.search.brave.com/iTSB1EO-HIM0buZ5DxCxSVPSWRCXu4LY-dSpZJgCQ3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wNC8xNC8wNy9z/dG92ZS03NjM0NTU2/XzY0MC5qcGc",
    "https://imgs.search.brave.com/Np0qOQTKbCBVN8syUhfOwwQhpATZng74kZvbP4rXCAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzQyLzczLzQy/LzM2MF9GXzEwNDI3/MzQyNDFfRkVPZ0lS/SktHVlNtSXd5OWpj/ZnJGTUNqRWFIVjZI/ZjEuanBn",
    "https://www.realsimple.com/thmb/Q6p6GxChOIqPfXZ7fcUKh-vnTUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-remove-built-up-grease-from-kitchen-appliances-GettyImages-2005426249-0fcecd5bf6a541e1afe31befab3de5e3.jpg",
    "https://images.openai.com/static-rsc-3/xolKY8CBIiC_LD4IlkG66xXP9W7o2kvcfZ1605vDZzPftMDtDU21RTq8bV7oMNSk-ByX6yw-kwuLnD__RntZ1IvKKQsr9dU4uoyc35goaYo?purpose=fullsize&v=1"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <h2>Our Recent Work</h2>

      {/* Desktop Grid */}
      <div className="gallery-grid desktop">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Chimney service" />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="gallery-slider mobile">
        <img src={images[index]} alt="Chimney service" />
      </div>

    </section>
  );
}

export default Gallery;
