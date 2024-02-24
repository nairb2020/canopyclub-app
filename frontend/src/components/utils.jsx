import { Typography, Link } from "@mui/material";

export const Copyright = (props) => {
  return (
    <Typography variant='body2' color='text.secondary' mt={1}>
      {"Copyright © "}
      <Link href='/'>Tasted Inc.</Link>
      &nbsp;{new Date().getFullYear()}
    </Typography>
  );
};

export const setErrorWithTimeOut = (errorMessage, setError) => {
  setError(errorMessage);
  setTimeout(() => {
    setError("");
  }, 5000);
};

export const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};
