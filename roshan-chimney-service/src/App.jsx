import Navbar from "./components/Navbar";
import TrustBar from "./components/TrustBar";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ROService from "./components/ROService";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallBar from "./components/CallBar";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import BookingForm from "./components/BookingForm";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <TrustBar />
      <Services />
      <ROService />
      <HowItWorks />
      <Gallery />
      <Brands />
      <WhyChoose />
      <Pricing />
      <Reviews />
      <CTA />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <CallBar />

      <a
        href="https://wa.me/916206554739"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        💬 WhatsApp
      </a>
    </>
  );
}

export default App;
