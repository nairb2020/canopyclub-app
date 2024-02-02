import React from "react";
import BannerBackground from "../../../assets/home-banner-background.png";
import BannerImage from "../../../assets/home-banner-image.jpeg";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../../../assets/about-background.png";
import AboutBackgroundImage from "../../../assets/about-background-image.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Button } from "@mui/material";

const About = () => {
  return (
    <>
      <div className='home-banner-container'>
        <div className='home-banner-image-container'>
          <img src={BannerBackground} alt='' />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>Splurge Travels Loved by Actual Humans.</h1>
          <p className='primary-text'>
            Using AI travel concierge to optimize your itinerary to 95% on budget, 5% splurge, and invite-only, real-time
            collab rewards.
          </p>
          <p className='primary-text'>
            Our AI/human solution will intake EVERY single event/piece of property/flight that falls under your itinerary
            time & locations. From there, using your KYC (anonymized social media feed, LinkedIn, tastes) application, we
            tailor ideas, based on your needs and travel cadences.
          </p>
          <Button
            variant='contained'
            size='large'
            endIcon={<FiArrowRight />}
            sx={{
              borderRadius: 4,
              "&.MuiButton-contained": { background: "#fe9e0e" },
            }}
            onClick={() => window.open("https://alexander184.typeform.com/to/tZVzhD3D", "_blank")}>
            Sign Up Here
          </Button>
        </div>

        <div className='home-image-section'>
          <img src={BannerImage} alt='' />
        </div>
      </div>

      <div className='about-section-container'>
        <div className='about-background-image-container'>
          <img src={AboutBackground} alt='' />
        </div>
        <div className='about-section-image-container'>
          <img src={AboutBackgroundImage} alt='' />
        </div>
        <div className='about-section-text-container'>
          {/* <p className="primary-subheading">About</p> */}
          <h1 className='primary-heading'>Travel Concierge for the Modern Traveler</h1>
          <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <p className='primary-text'>
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button
              className='watch-video-button'
              onClick={() => window.open("https://www.youtube.com/watch?v=fVh9YNTzhak", "_blank")}>
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
