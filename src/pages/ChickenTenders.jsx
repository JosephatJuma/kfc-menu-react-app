import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import LoadingComponent from "../components/LoadingComponent";
import NoStaffFound from "../components/NoStaffFound";
import useStaff from "../api/hooks/useStaff";
import { chickenTenders } from "../data/chicken-tender";
function ChickenTenders() {
  const list = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);
  const { handleFetch } = useStaff();

  const loadingRender = {
    true: <LoadingComponent />,
    false: (
      <>
        {chickenTenders.length > 0 ? (
          <Grid container spacing={2}>
            {chickenTenders.map((item) => (
              <ItemCard key={item.id} staff={item} />
            ))}
          </Grid>
        ) : (
          <NoStaffFound
            message="There is no item to show!"
            refresh={handleFetch}
          />
        )}
      </>
    ),
  }[loading];
  return <>{loadingRender}</>;
}

export default ChickenTenders;
