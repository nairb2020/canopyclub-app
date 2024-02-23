import { Typography, Link } from "@mui/material";

export const Copyright = (props) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {"Copyright © "}
      <Link color='inherit' href='/'>
        Tasted Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};


export const setErrorWithTimeOut = (errorMessage, setError) => {
  setError(errorMessage);
  setTimeout(() => {
    setError("");
  }, 5000);
};
