import React, { useState } from "react";
import { Card, Avatar, ListItemIcon, Button } from "@mui/material";
import { MenuItem, Menu, IconButton, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

import { MoreVert, Visibility } from "@mui/icons-material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import {
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
  setSelectedStaff,
} from "../redux/slices/staffSlice";

function ItemCard(props) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowDeleteModal());
  };
  const viewStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowViewModal());
  };
  const editStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowEditModal());
  };
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          aria-controls={anchorEl ? "action-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleOpen}
          size="small"
        >
          <MoreVert />
        </IconButton>
      </div>

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
        <Typography variant="body2">{props.staff.email}</Typography>

        <Button sx={{ backgroundColor: "#FF4500", color: "white" }}>
          Add to Cart
        </Button>
      </center>

      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => editStaff(props.staff)}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Edit
        </MenuItem>

        <MenuItem onClick={() => deleteStaff(props.staff)}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </Card>
  );
}

export default ItemCard;
