import * as React from "react";
import { MenuItem, Divider } from "@mui/material";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { ListItemIcon, Menu, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/slices/themeSlice";
import {
  ShoppingCart,
  Settings,
  Person,
  Brightness4,
} from "@mui/icons-material";

export default function CartMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mr: 2 }}
            aria-controls={open ? "cart-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <ShoppingCart sx={{ color: "#FF4500" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="cart-menu"
        open={anchorEl ? true : false}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography sx={{ padding: "16px" }}>Shopping Cart</Typography>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          Profile
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
