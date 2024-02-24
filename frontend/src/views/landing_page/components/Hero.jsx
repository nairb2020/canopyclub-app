import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import mobileBGImage from "../../../assets/000424520015.jpg";

export default function Hero() {
  return (
    <Container id='hero' sx={{ pt: { xs: 12, md: 20 }, pb: { xs: 8, md: 12 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: { xs: 0, sm: 5, md: 20 }, textAlign: "center" }}>
            <Typography component='h2' variant='h4' color='text.primary' sx={{ fontWeight: "bold" }}>
              Offsite Hospitality Loved By Humans.
            </Typography>
            <Typography variant='body1' color='text.primary' sx={{ mt: 3, mb: 3 }}>
              Making what's perfect more human.
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
                JOIN WAITLIST
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* right handside for large screen starts here */}
        <Grid item xs={12} md={6} sx={{ display: "flex", width: "100%" }}>
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
      </Grid>
    </Container>
  );
}
