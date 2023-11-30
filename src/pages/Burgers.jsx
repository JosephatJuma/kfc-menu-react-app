import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import NoStaffFound from "../components/NoStaffFound";
import { burgers } from "../data/burgers";
function Burgers() {
  return (
    <>
      {burgers.length > 0 ? (
        <Grid container spacing={2}>
          {burgers.map((item) => (
            <ItemCard key={item.id} staff={item} />
          ))}
        </Grid>
      ) : (
        <NoStaffFound message="There is no item to show!" />
      )}
    </>
  );
}

export default Burgers;
