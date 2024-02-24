import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppNavBar from "./components/AppNavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Apply from "./components/Apply";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { useThemeMode } from "../../contexts/ThemeContext";

export default function LandingPage() {
  const { mode, toggleColorMode } = useThemeMode(); // Destructure the toggleMode function

  return (
    <>
      <AppNavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ color: "text.primary" }}>
        <Hero />
        <About />
        <Apply />
        <Contact />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
