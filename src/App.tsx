import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Concerns from "./components/Concerns";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

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
