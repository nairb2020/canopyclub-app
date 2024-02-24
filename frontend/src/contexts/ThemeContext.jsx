import React, { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

// Create a context
const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default theme mode

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const headingStyles = {
    fontFamily: '"Open Sans", sans-serif',
    // Add other common styles here, if any
  };
  // Dynamically create the theme based on the current mode
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        // Update the primary color
        main: mode === "light" ? "#c8a2c8" : "#f0caf0",
      },
    },
    typography: {
      fontFamily: '"Lora", serif',
      body2: { fontFamily: '"Open Sans", sans-serif' },
      h1: { ...headingStyles },
      h2: { ...headingStyles },
      h3: { ...headingStyles },
      h4: { ...headingStyles },
      h5: { ...headingStyles, fontSize: "1.25rem" },
      h6: { ...headingStyles, fontSize: "0.95rem" },
      button: { ...headingStyles, fontSize: "1.1rem" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            // backgroundColor: "#ededf0", // Change to your preferred background color
            background: mode === "light" ? "linear-gradient(180deg, #ededf0, #fff)" : "linear-gradient(#11110f, #000)", // Or apply a gradient
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0, // All buttons are rectangular
          },
        },
      },
    },
  });

  // Provide the theme and toggleMode function to the context
  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
