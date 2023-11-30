import React, { useEffect } from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Home, Logout, Group, School } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function DrawerComponent({ drawerWidth, toggleDrawer, logout }) {
  const navigate = useNavigate();
  const [active, setActive] = React.useState("Chicken Buckets");
  const handleChange = (itemName) => {
    setActive(itemName);
    toggleDrawer();
  };

  const categories = [
    {
      name: "Chicken Buckets",
      link: "/",
    },

    {
      name: "Chicken Tenders",
      link: "/chicken-tenders",
    },
    {
      name: "Hot Wings",
      link: "/hotwings",
    },
    {
      name: "Chicken Sandwiches",
      link: "/sandwiches",
    },
    {
      name: "Burgers",
      link: "/burgers",
    },
    {
      name: "Driks & Beverages",
      link: "/drinks",
    },
  ];
  return (
    <div>
      {/* This is the container of the Logo on the Drawer/Sidebar */}
      <Toolbar style={{ backgroundColor: "#FF4500", margin: 0 }}>
        <div className="topbar-logo">
          <Typography fontWeight="bold">
            Kentucky Fried Chicken (KFC) - Mukono
          </Typography>
        </div>
      </Toolbar>

      <List>
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <Link to={item.link} className="link">
                <ListItem
                  disablePadding
                  onClick={() => handleChange(item.name)}
                  sx={
                    active === item.name ? { backgroundColor: "#FF4500" } : {}
                  }
                >
                  <ListItemButton>
                    <ListItemText
                      primary={item.name}
                      style={
                        active === item.name
                          ? { color: "#fff" }
                          : { color: "#FF4500" }
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default DrawerComponent;
