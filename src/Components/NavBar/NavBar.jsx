import React, { useState } from "react";
import "./NavBar.css";
import MedifyLogo from "../Assets/Medify-logo.png";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Box p={1} bgcolor={"rgba(42, 167, 255, 1)"}>
        <Typography fontSize={14} textAlign="center" color={"#fff"}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={MedifyLogo} alt="Logo" height={27} />
          </Link>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
            className={["navlinks", menuOpen && "navlinks active"]}
          >
            <p>Find Doctors</p>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
            >
              Hospitals
            </Link>
            <p>Medicines</p>
            <p>Surgeries</p>
            <p>Software for Provider</p>
            <p>Facilities</p>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>
          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
};
