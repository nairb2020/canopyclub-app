import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Contact from "./components/Contact";
import About from "./components/About";
import Apply from "./components/Apply";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useThemeMode } from "../../contexts/ThemeContext";

export default function LandingPage() {
  const { mode, toggleColorMode } = useThemeMode(); // Destructure the toggleMode function

  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <LogoCollection />
        <About />
        <Divider />
        <Apply />
        <Divider />
        <Contact />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
