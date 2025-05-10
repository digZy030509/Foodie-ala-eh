import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Whychoose from "./components/Whychoose";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Loader>
        <Navbar />
        <Hero />
        <About />
        <Whychoose />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Loader>
    </div>
  );
};

export default App;
