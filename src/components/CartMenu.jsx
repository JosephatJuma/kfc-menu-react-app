import * as React from "react";
import { MenuItem, Divider, Card } from "@mui/material";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ListItemIcon,
  Menu,
  Chip,
  Box,
  Paper,
  Popover,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/slices/themeSlice";
import { ShoppingCart, MoneyOutlined, Remove } from "@mui/icons-material";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function CartMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const cart = useSelector((state) => state.cart);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Shopping Cart">
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
          <Chip
            label={cart.cart.length}
            size="small"
            color="primary"
            sx={{ position: "absolute", top: 1, right: 80 }}
          />
        </Tooltip>
      </Box>
      <Popover
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
        <Paper>
          {cart.cart.length > 0 ? (
            cart.cart.map((item, index) => (
              <MenuItem
                key={index}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>{item.name}</Typography>
                <IconButton
                  sx={{ backgroundColor: "red" }}
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  <Remove />
                </IconButton>
              </MenuItem>
            ))
          ) : (
            <MenuItem>
              <Typography>No Item</Typography>
            </MenuItem>
          )}

          <MenuItem>
            <ListItemIcon>
              <MoneyOutlined />
            </ListItemIcon>
            <Typography>Total : {cart.totalAmout}</Typography>
          </MenuItem>
          {cart.cart.length > 0 && (
            <Link to="/checkout">
              <Button
                sx={{
                  backgroundColor: "#000000",
                  color: "white",
                  ":hover": { backgroundColor: "#000000c0", color: "white" },
                }}
                fullWidth
              >
                Checkout
              </Button>
            </Link>
          )}
        </Paper>
      </Popover>
    </React.Fragment>
  );
}
