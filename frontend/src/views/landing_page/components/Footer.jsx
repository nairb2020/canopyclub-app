import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Link as MuiLink } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { Copyright } from "../../../components/utils";
import tastedLogo from "../../../assets/tastedlogo.svg";
import { Link, useLocation } from "react-router-dom";

const logoStyle = {
  width: "90px",
  height: "40px",
  margin: "0px 30px 0px 0px", // top right bottom left
  cursor: "pointer",
};

export default function Footer() {
  const location = useLocation(); // Hook to access the current location
  const scrollToTop = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevents <Link> from navigating
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }
    // For other paths, <Link> will navigate as usual
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Link to='/' onClick={scrollToTop}>
              <img src={tastedLogo} style={logoStyle} alt='Tasted Logo' />
            </Link>
            <Typography variant='body2' fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant='body2' color='text.secondary' mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction='row' spacing={1} useFlexGap>
              <TextField
                id='outlined-basic'
                hiddenLabel
                size='small'
                variant='outlined'
                fullWidth
                aria-label='Enter your email address'
                placeholder='Your email address'
                inputProps={{
                  autocomplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button variant='contained' color='primary' sx={{ flexShrink: 0 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant='body2' fontWeight={600}>
            Product
          </Typography>
          <MuiLink color='text.secondary' href='#'>
            ABOUT
          </MuiLink>
          <MuiLink color='text.secondary' href='#'>
            APPLY
          </MuiLink>
          <MuiLink color='text.secondary' href='#'>
            CONTACT
          </MuiLink>
          <MuiLink color='text.secondary' href='#'>
            FAQs
          </MuiLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant='body2' fontWeight={600}>
            Company
          </Typography>
          <Link color='text.secondary' href='#'>
            About us
          </Link>
          <Link color='text.secondary' href='#'>
            Careers
          </Link>
          <Link color='text.secondary' href='#'>
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant='body2' fontWeight={600}>
            Legal
          </Typography>
          <MuiLink color='text.secondary' href='#'>
            Terms
          </MuiLink>
          <MuiLink color='text.secondary' href='#'>
            Privacy
          </MuiLink>
          <MuiLink color='text.secondary' href='#'>
            Contact
          </MuiLink>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}>
        <div>
          <MuiLink color='text.secondary' href='#'>
            Privacy Policy
          </MuiLink>
          <Typography display='inline' sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <MuiLink color='text.secondary' href='#'>
            Terms of Service
          </MuiLink>
          <Copyright />
        </div>
        <Stack
          direction='row'
          justifyContent='left'
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}>
          <IconButton color='inherit' href='https://github.com/mui' aria-label='GitHub' sx={{ alignSelf: "center" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color='inherit' href='https://twitter.com/MaterialUI' aria-label='X' sx={{ alignSelf: "center" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://www.linkedin.com/company/mui/'
            aria-label='LinkedIn'
            sx={{ alignSelf: "center" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
