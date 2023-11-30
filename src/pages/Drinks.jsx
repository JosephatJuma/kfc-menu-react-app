import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import NoStaffFound from "../components/NoStaffFound";
import { drinks } from "../data/drinks";
function Drinks() {
  return (
    <>
      {drinks.length > 0 ? (
        <Grid container spacing={2}>
          {drinks.map((item) => (
            <ItemCard key={item.id} staff={item} />
          ))}
        </Grid>
      ) : (
        <NoStaffFound message="There is no item to show!" />
      )}
    </>
  );
}

export default Drinks;
