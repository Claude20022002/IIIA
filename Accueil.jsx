import React from "react";
import { Box, Button, Stack, Typography, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Accueil() {
  const jump = keyframes`
  0% {
    transform: translateY(0); /* Position de départ */
  }
  50% {
    transform: translateY(-10px); /* Point le plus haut */
  }
  100% {
    transform: translateY(0); /* Retour à la position de départ */
  }
`;
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(./image1.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          rowGap: "15px",
          width: "100%",
        }}
      >
        <Box
          sx={{ width: "100%", textAlign: "center" }}
          className="welcomeText"
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2.0rem",
                md: "3.5rem",
              },
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, #1a6557, #569d7f, #63b45e, #a4bf85)", // Palette revisitée
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Bienvenue sur Green Convert"],
              }}
            />
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              width: { xs: "auto", sm: "auto", md: "200px" },
              height: "auto",
              marginTop: "10px",
              fontSize: "auto",
              backgroundColor: "green",
              transition: "transform 2s ease-in-out",
              animation: `1s ${jump} infinite  ease-in-out`,
              "&:hover": {
                backgroundColor: "#43c21d",
                cursor: "pointer",
              },
            }}
            aria-label="Commencer avec Green Convert"
            onClick={() => navigate("/connexion")}
          >
            On n'y va
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
