import React from "react";
import Logo from "../../../assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  Info,
  CommentRounded,
  PhoneRounded,
  AccountCircleRounded
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const navigate = useNavigate();
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
      onclick: () => void 0,
    },
    {
      text: "About",
      icon: <Info />,
      onclick: () => void 0,
    },
    {
      text: "Tesimonials",
      icon: <CommentRounded />,
      onclick: () => void 0,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
      onclick: () => void 0,
    },
    {
      text: "Log In/Sign Up",
      icon: <AccountCircleRounded />,
      onclick: () => navigate("/login"),
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <button className="primary-button" onClick={() => navigate("/login")}>Log In/Sign Up</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* Going to hide until width is small */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 230 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onclick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
