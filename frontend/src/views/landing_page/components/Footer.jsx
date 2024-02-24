import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TastedLogo from "../../../components/icons/TastedLogo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { Copyright } from "../../../components/utils";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../../components/utils";

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
            <Link href='/' onClick={scrollToTop}>
              <TastedLogo style={logoStyle} />
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
          <Typography variant='h6' fontWeight={600}>
            Product
          </Typography>
          <Link color='text.secondary' onClick={() => scrollToSection("about")}>
            <Typography variant='body1' color='text.secondary'>
              ABOUT
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("apply")}>
            <Typography variant='body1' color='text.secondary'>
              APPLY
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              CONTACT
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("faq")}>
            <Typography variant='body1' color='text.secondary'>
              FAQs
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant='h6' fontWeight={600}>
            Company
          </Typography>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              About us
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              Careers
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              Press
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant='h6' fontWeight={600}>
            Legal
          </Typography>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              Terms
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              Privacy
            </Typography>
          </Link>
          <Link color='text.secondary' onClick={() => scrollToSection("contact")}>
            <Typography variant='body1' color='text.secondary'>
              Contact
            </Typography>
          </Link>
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
          <Link color='text.secondary' href='#'>
            Privacy Policy
          </Link>
          <Typography display='inline' sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color='text.secondary' href='#'>
            Terms of Service
          </Link>
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
          <Link
            href='https://github.com/nairb2020/canopyclub-app'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: "inherit" }}>
            <IconButton color='inherit' aria-label='GitHub' sx={{ alignSelf: "center" }}>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: "inherit" }}>
            <IconButton color='inherit' aria-label='GitHub' sx={{ alignSelf: "center" }}>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: "inherit" }}>
            <IconButton color='inherit' aria-label='GitHub' sx={{ alignSelf: "center" }}>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
