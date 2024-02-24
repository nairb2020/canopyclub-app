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
import { Link, useLocation } from "react-router-dom";
import { scrollToSection as defaultScrollToSection } from "../../../components/utils";
import TastedLogo from "../../../components/icons/TastedLogo";

const logoStyle = {
  width: "90px",
  height: "40px",
  margin: "15px 30px 15px 0px", // top right bottom left
  cursor: "pointer",
};

function AppNavBar({ mode, toggleColorMode }) {
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
                <TastedLogo style={logoStyle} />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", flexGrow: 1 }}>
                <MenuItem onClick={() => scrollToSection("about")} sx={{ py: "6px", px: "12px", mx: 2 }}>
                  <Typography variant='h6' color='text.primary'>
                    ABOUT
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("apply")} sx={{ py: "6px", px: "12px", mx: 2 }}>
                  <Typography variant='h6' color='text.primary'>
                    APPLY
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("contact")} sx={{ py: "6px", px: "12px", mx: 2 }}>
                  <Typography variant='h6' color='text.primary'>
                    CONTACT
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")} sx={{ py: "6px", px: "12px", mx: 2 }}>
                  <Typography variant='h6' color='text.primary'>
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}>
              <Button
                color='primary'
                variant='contained'
                size='small'
                component='a'
                href='/login'
                sx={{
                  color: "white",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none", // Also remove the shadow on hover
                    backgroundColor: "primary.main",
                    opacity: 0.8, // Adjust opacity to control darkness; lower is darker
                  },
                }}>
                LOG IN/SIGN UP
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
                  <MenuItem onClick={() => scrollToSection("about")}>
                    <Typography variant='h5' color='text.primary'>
                      ABOUT
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("apply")}>
                    <Typography variant='h5' color='text.primary'>
                      APPLY
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("contact")}>
                    <Typography variant='h5' color='text.primary'>
                      CONTACT
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>
                    <Typography variant='h5' color='text.primary'>
                      FAQ
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color='primary'
                      variant='contained'
                      component='a'
                      size='medium'
                      href='/login'
                      sx={{
                        width: "100%",
                        color: mode == "light" ? "white" : "black",
                        boxShadow: "none",
                        "&:hover": {
                          boxShadow: "none", // Also remove the shadow on hover
                          backgroundColor: "primary.main",
                          opacity: 0.8, // Adjust opacity to control darkness; lower is darker
                        },
                      }}>
                      LOG IN/SIGN UP
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

AppNavBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppNavBar;
