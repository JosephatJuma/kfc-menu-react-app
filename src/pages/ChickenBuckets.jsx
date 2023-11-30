import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import NoStaffFound from "../components/NoStaffFound";
import { buckets } from "../data/buckets";
function ChickenBuckets() {
  return (
    <>
      {buckets.length > 0 ? (
        <Grid container spacing={2}>
          {buckets.map((item) => (
            <ItemCard key={item.id} staff={item} />
          ))}
        </Grid>
      ) : (
        <NoStaffFound message="There is no item to show!" />
      )}
    </>
  );
}

export default ChickenBuckets;
