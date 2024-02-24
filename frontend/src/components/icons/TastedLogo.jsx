import React from "react";
import { useTheme } from "@mui/material/styles";
import tastedLogo from "../../assets/tastedlogo.svg"; // Path to your logo

const TastedLogo = ({ style }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return <img src={tastedLogo} alt='Tasted Logo' style={{ filter: isDarkMode ? "invert(100%)" : "none", ...style }} />;
};

export default TastedLogo;
