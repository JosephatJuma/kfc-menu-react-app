import React from "react";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Box,
  Card,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { ArrowBack, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { removeFromCart } from "./redux/slices/cartSlice";
function Checkout() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
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
          {card.cart.length === 0 && <Typography>No item in cart</Typography>}
          {card.cart.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  margin: "auto",
                  padding: 2,
                  maxWidth: 1000,
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={item.image} width={50} height={50} />
                  <div style={{ marginLeft: 10 }}>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.price}</Typography>
                  </div>
                </div>
                <Button
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    ":hover": { backgroundColor: "#000000c0" },
                  }}
                  endIcon={<Remove />}
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                >
                  Remove
                </Button>
              </Card>
            );
          })}
          <Typography>Total: {card.totalAmout}</Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default Checkout;
