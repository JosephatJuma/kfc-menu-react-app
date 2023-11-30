import React from "react";
import { Card, Button, Typography } from "@mui/material";

function ItemCard(props) {
  return (
    <Card
      sx={{
        margin: "2px",
        flex: 1,
        padding: 1,
        borderRadius: 1,
        minWidth: "48%", // Default width for small screens
        "@media (min-width: 600px)": {
          width: "20%", // Adjust the width for larger screens
          minWidth: "200px", // Set a minimum width for the card
        },
        "&:hover": {
          boxShadow: "0px 2px 8px #72c1c6",
        },
      }}
    >
      <center>
        <img
          alt={props.staff.name}
          width={200}
          src={props.staff.image}
          height={200}
        />
      </center>
      <center>
        <Typography variant="subtitle2">{props.staff.name}</Typography>
        <Typography variant="body2">UGX: {props.staff.price}</Typography>

        <Button sx={{ backgroundColor: "#FF4500", color: "white" }}>
          Add to Cart
        </Button>
      </center>
    </Card>
  );
}

export default ItemCard;
