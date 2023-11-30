import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import NoStaffFound from "../components/NoStaffFound";
import { chickenTenders } from "../data/chicken-tender";
function Sandwiches() {
  return (
    <>
      {chickenTenders.length > 0 ? (
        <Grid container spacing={2}>
          {chickenTenders.map((item) => (
            <ItemCard key={item.id} staff={item} />
          ))}
        </Grid>
      ) : (
        <NoStaffFound message="There is no item to show!" />
      )}
    </>
  );
}

export default Sandwiches;
