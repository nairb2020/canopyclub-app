import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import mobileBGImage from "../../../assets/L1000219.jpg";

export default function Contact() {
  return (
    <Container id='contact' sx={{ pt: 0, pb: { xs: 8, md: 12 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: "flex", width: "100%", order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              mx: "auto",
              maxWidth: { xs: "80%", sm: "100%" }, // Control the width as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              width: "auto",
            }}>
            <img
              src={mobileBGImage}
              alt='Background'
              style={{ maxHeight: "600px", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ dispaly: "flex", width: "100%", order: { xs: 1, md: 2 } }}>
          <Box sx={{ pt: { xs: 0, sm: 5, md: 20 }, ml: 2, mr: 1, textAlign: "center" }}>
            <Typography component='h2' variant='h4' color='text.primary' sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Typography variant='body1' color='text.primary' sx={{ mt: 3, mb: 3, textAlign: "left" }}>
              Can't find what you need? Let us know, and we'll respond within 24 hours. Reach out to{" "}
              <a href='mailto:hello@tasted.com' style={{ color: "inherit" }}>
                hello@tasted.com
              </a>
              . 
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
              <Button
                color='primary'
                variant='contained'
                size='medium'
                component='a'
                href='/signup'
                sx={{
                  fontFamily: '"Lora", serif',
                  color: "white",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none", // Also remove the shadow on hover
                    backgroundColor: "primary.main",
                    opacity: 0.8, // Adjust opacity to control darkness; lower is darker
                  },
                }}>
                CONTACT AN ADVISOR
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
