import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Alert,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {"Copyright © "}
      <Link color='inherit' href='https://canopyclub.us/'>
        Tasted Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from refreshing
    const data = new FormData(e.currentTarget);
    emailRef.current = data.get("email");
    passwordRef.current = data.get("password");
    passwordConfirmRef.current = data.get("password-confirmation");
    if (passwordRef.current !== passwordConfirmRef.current) {
      return setError("Passwords do not match");
    }
    // TODO: add additional password validations here. Ex https://github.com/tdcolvin/SafeFirebasePasswordReset
    if (passwordRef.current.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current, passwordRef.current);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
    console.log(emailRef.current, passwordRef.current);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((showconfirm) => !showconfirm);

  const handleMouseDownPassword = (e) => e.preventDefault();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          {error && <Alert severity='error'>{error}</Alert>}
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id='lastName' label='Last Name' name='lastName' autoComplete='off' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  type='email'
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl required fullWidth variant='outlined'>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <OutlinedInput
                    id='password'
                    name='password'
                    label='password'
                    autoComplete='off'
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant='outlined' required>
                  <InputLabel htmlFor='password-confirmation'>Password Confirmation</InputLabel>
                  <OutlinedInput
                    id='password-confirmation'
                    name='password-confirmation'
                    label='password-confirmation'
                    autoComplete='off'
                    type={showPasswordConfirm ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password-confirmation visibility'
                          onClick={handleClickShowPasswordConfirm}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'>
                          {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' disabled={loading} sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='#' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
