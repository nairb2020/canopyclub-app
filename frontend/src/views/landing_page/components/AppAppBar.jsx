import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "../../../components/icons/ToggleColorMode";
import tastedLogo from "../../../assets/tastedlogo.svg";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection as defaultScrollToSection } from "../../../components/utils";

const logoStyle = {
  width: "90px",
  height: "40px",
  margin: "15px 30px 15px 0px", // top right bottom left
  cursor: "pointer",
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation(); // Hook to access the current location

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToTop = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevents <Link> from navigating
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }
    // For other paths, <Link> will navigate as usual
  };

  const scrollToSection = (sectionId) => {
    defaultScrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: "none", // Removes shadow
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}>
        <Container maxWidth='lg'>
          <Toolbar
            variant='regular'
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              bgcolor: "transparent",
              backdropFilter: "blur(36px)",
              maxHeight: 40,
            }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}>
              <Link to='/' onClick={scrollToTop}>
                <img src={tastedLogo} style={logoStyle} alt='Tasted Logo' />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem onClick={() => scrollToSection("about")} sx={{ py: "6px", px: "12px" }}>
                  <Typography variant='body2' color='text.primary'>
                    ABOUT
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("apply")} sx={{ py: "6px", px: "12px" }}>
                  <Typography variant='body2' color='text.primary'>
                    APPLY
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("contact")} sx={{ py: "6px", px: "12px" }}>
                  <Typography variant='body2' color='text.primary'>
                    CONTACT
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")} sx={{ py: "6px", px: "12px" }}>
                  <Typography variant='body2' color='text.primary'>
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color='primary'
                variant='text'
                size='small'
                component='a'
                href='/material-ui/getting-started/templates/sign-in/'
                target='_blank'>
                Sign in
              </Button>
              <Button
                color='primary'
                variant='contained'
                size='small'
                component='a'
                href='/material-ui/getting-started/templates/sign-up/'
                target='_blank'>
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}>
                <MenuIcon />
              </Button>
              <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}>
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection("about")}>ABOUT</MenuItem>
                  <MenuItem onClick={() => scrollToSection("apply")}>APPLY</MenuItem>
                  <MenuItem onClick={() => scrollToSection("contact")}>CONTACT</MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color='primary'
                      variant='contained'
                      component='a'
                      href='/material-ui/getting-started/templates/sign-up/'
                      target='_blank'
                      sx={{ width: "100%" }}>
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color='primary'
                      variant='outlined'
                      component='a'
                      href='/material-ui/getting-started/templates/sign-in/'
                      target='_blank'
                      sx={{ width: "100%" }}>
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
