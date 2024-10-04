import React from "react";
import Logo from "../assets/logo.png";
import {
  Container,
  Grid2,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import HeroImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useInView } from "react-intersection-observer";
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
            <Button
              onClick={() => navigate("/categories")}
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                backgroundColor: "var(--secondary-bg-color)",
                color: "var(--secondary)",
              }}
            >
              View Products
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
const Card = ({ reason, Logo, color, isLargeScreen, delay }) => {
  const size = isLargeScreen ? 150 : 100;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="whyus-card"
      style={{
        animation: inView ? `slideUp 0.5s ease ${delay}s both` : "none",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          color: "white",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
        }}
      >
        {Logo && <Logo style={{ fontSize: size * 0.6, color: "white" }} />}
      </div>

      <Typography variant={isLargeScreen ? "h5" : "h6"} align="center">
        {reason}
      </Typography>
    </div>
  );
};

// Why Us Section
const WhyUs = () => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  const cards = [
    {
      reason: "On-Time Delivery",
      Logo: AccessTimeIcon,
      color: "#CA054D",
    },
    {
      reason: "Customized Solutions",
      Logo: SettingsSuggestIcon,
      color: "#3B1C32",
    },
    {
      reason: "Quality Assurance",
      Logo: DoneIcon,
      color: "#FFCF9C",
    },
    {
      reason: "Competitive Pricing",
      Logo: CurrencyRupeeIcon,
      color: "#B96D40",
    },
  ];

  return (
    <Box className="whyus" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Why Us
      </Typography>

      <Grid2 container spacing={10} justifyContent="center">
        {cards.map((card, index) => (
          <Grid2
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Card
              reason={card.reason}
              Logo={card.Logo}
              color={card.color}
              isLargeScreen={isLargeScreen}
              delay={index * 0.3}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
    </>
  );
};

export default Home;
