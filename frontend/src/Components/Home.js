import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpeg";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-banner-image-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Splurge Travels Loved by Actual Humans.
          </h1>
          <p className="primary-text">
            Using AI travel concierge to optimize your itinerary to 95% on
            budget, 5% splurge, and invite-only, real-time collab rewards.
          </p>
          <p className="primary-text">
            Our AI/human solution will intake EVERY single event/piece of
            property/flight that falls under your itinerary time & locations.
            From there, using your KYC (anonymized social media feed, LinkedIn,
            tastes) application, we tailor ideas, based on your needs and travel
            cadences.
          </p>
          <Button
            variant="contained"
            size="large"
            endIcon={<FiArrowRight />}
            sx={{
              borderRadius: 4,
              "&.MuiButton-contained": { background: "#fe9e0e" },
            }}
            onClick={() =>
              window.open(
                "https://alexander184.typeform.com/to/tZVzhD3D",
                "_blank"
              )
            }
          >
            Sign Up Here
          </Button>
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
