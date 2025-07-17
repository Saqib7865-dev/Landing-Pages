import About from "./Components/About";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LatestReleases from "./Components/LatestReleases";
import PricingCards from "./Components/PricingCards";
import ThisMonth from "./Components/ThisMonth";

function App() {
  // Header
  // HeroSection
  // About the Series
  // Key Features
  // Screenshots / Episode Preview
  // Pricing Section
  // Testimonials / Reviews
  // Call to Action
  // Footer

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <LatestReleases />
      <ThisMonth />
      <About />
      <Features />
      <PricingCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
