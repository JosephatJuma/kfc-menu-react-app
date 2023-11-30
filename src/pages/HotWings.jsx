import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import NoStaffFound from "../components/NoStaffFound";
import { chickenWings } from "../data/cheicken-wings";

function HotWings() {
  return (
    <>
      {chickenWings.length > 0 ? (
        <Grid container spacing={2}>
          {chickenWings.map((item) => (
            <ItemCard key={item.id} staff={item} />
          ))}
        </Grid>
      ) : (
        <NoStaffFound message="There is no item to show!" />
      )}
    </>
  );
}

export default HotWings;
