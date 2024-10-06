import HeroImage from "../assets/hero.jpg";

import { useNavigate } from "react-router-dom";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";

import PrimaryBtn from "./PrimaryBtn";

const Hero = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Container>
        <Grid2 container spacing={4}>
          {/* Left Side: Hero Text */}
          <Grid2 item xs={12} md={6} color="var(--base-4)">
            <Typography variant="h4">Quality</Typography>
            <Typography
              variant="h4"
              fontWeight={600}
              gutterBottom
              color="var(--secondary)"
            >
              Rubber Products
            </Typography>
            <Typography variant="h4" sx={{ mt: 5 }}>
              To Maximise
            </Typography>
            <Typography
              variant={isLargeScreen ? "h1" : "h2"}
              gutterBottom
              color="var(--secondary)"
              fontWeight={700}
            >
              Your Profit
            </Typography>
            <PrimaryBtn
              title={"View Products"}
              size={"large"}
              callBack={() => navigate("/categories")}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Hero;
