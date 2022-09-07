import React from "react";
import { Box, Typography } from "@mui/material";
import "./home.css";
import backgroundSideLarge from "assets/images/home/slide-background1-large.png";
import treatment from "assets/images/home/treatment.png";
import CustomButton from "components/CustomButton";

const Home = () => {
  return (
    <>
      {/* Landing page */}
      <Box component="section">
        {/* Background image */}
        <img src={backgroundSideLarge} alt="background" className="background-image"/>
        <Box className="landing-page" gap={2}>
          <Box>
            <Typography variant="h2" mb={2}>Clinic & beauty consultant</Typography>
            <Typography variant="subtitle1" mb={3}>It is a long established fact that a reader will be by the readable content of a page.</Typography>
            <CustomButton variant="contained" color="secondary">More Details</CustomButton>
          </Box>
          <Box>
            <img src={treatment} alt="treatment" />
          </Box>
        </Box>
      </Box>
      {/* Main service */}
      <Box component="section">
        <Typography variant="subtitle2" mb={2} textAlign="center">Main Services</Typography>
        <Typography variant="h3" mb={2} textAlign="center">Learn services to focus <br/> on your beauty</Typography>
        <Box component="p" textAlign="center">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, <br/> feugiat tellus sagittis, scelerisque eget nulla turpis.</Box>
      </Box>
    </>
  )
}

export default Home
