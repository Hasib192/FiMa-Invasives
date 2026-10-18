import { useState, type FormEvent } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Concerns from "./components/Concerns";
import Contact from "./components/Contact";
import { ADDRESS } from "./constants";
import Footer from "./components/Footer";
import { PHONE1, PHONE2, EMAIL, ADDRESS, MAP } from "./constants";


import aboutImg from "./assets/about-us-banner.jpg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Products */}
      <Products />

      {/* Concerns */}
      <Concerns />

      <Contact />

      <Footer />


    </div>
  );
}


export default App;
