import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Work />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
