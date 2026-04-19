
import { useState, useEffect } from "react";

function Gallery() {

  const images = [
    { src: "https://imgs.search.brave.com/iTSB1EO-HIM0buZ5DxCxSVPSWRCXu4LY-dSpZJgCQ3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wNC8xNC8wNy9z/dG92ZS03NjM0NTU2/XzY0MC5qcGc", label: "Chimney Service" },
    { src: "https://imgs.search.brave.com/Np0qOQTKbCBVN8syUhfOwwQhpATZng74kZvbP4rXCAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzQyLzczLzQy/LzM2MF9GXzEwNDI3/MzQyNDFfRkVPZ0lS/SktHVlNtSXd5OWpj/ZnJGTUNqRWFIVjZI/ZjEuanBn", label: "HOB Cleaning" },
    { src: "https://www.realsimple.com/thmb/Q6p6GxChOIqPfXZ7fcUKh-vnTUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-remove-built-up-grease-from-kitchen-appliances-GettyImages-2005426249-0fcecd5bf6a541e1afe31befab3de5e3.jpg", label: "Deep Cleaning" },
    { src: "/roservice.jpg", label: "RO Service" },
    { src: "./roinstall.jpg", label: "RO Installation" },
    { src: "./filter.jpg", label: "Filter Replacement" },
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
          <div key={i} className="gallery-item">
            <img src={img.src} alt={img.label} />
            <span className="gallery-label">{img.label}</span>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="gallery-slider mobile">
        <img src={images[index].src} alt={images[index].label} />
        <span className="gallery-label">{images[index].label}</span>
      </div>

    </section>
  );
}

export default Gallery;
