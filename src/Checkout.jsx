import React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { Paper, Box, Card, Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Checkout() {
  const themeMode = useSelector((state) => state.theme.mode);
  const card = useSelector((state) => state.cart);
  return (
    <div style={{ backgroundColor: themeMode === "light" && "#f2ebeb" }}>
      <Header themeMode={themeMode} />
      <Box sx={{ paddingTop: 10, height: "100vh" }}>
        <Paper
          elevation={3}
          sx={{
            margin: "auto",
            padding: 2,
            maxWidth: 1000,
            flexGrow: 1,
          }}
        >
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <h1>Checkout</h1>
          {card.cart.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  margin: "auto",
                  padding: 2,
                  maxWidth: 1000,
                  flexGrow: 1,
                }}
              >
                <im src={item.image} />
                <div>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.price}</Typography>
                </div>
              </Card>
            );
          })}
        </Paper>
      </Box>
    </div>
  );
}

export default Checkout;
