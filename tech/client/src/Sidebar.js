import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import techcarelogo from './images/techcarelogo.png';
import Axios from "axios";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor:'gray',
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  backgroundColor:'gray',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const MainPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [noUseEffect, setNoUseEffect] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
      setUsername(response.data.user[0].firstName + ' ' + response.data.user[0].firstName);
    });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>

      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        {open === true ? <div style={{display:'flex',width:'100%'}}>
               <Box
                component="img"
                sx={{
                height: 50,
                width: 50,
                marginLeft: '-1%',
                maxHeight: { xs: 250, md:250, xl: 250 },
                maxWidth: { xs: 250, md:250, xl: 250 },
                }}
                alt="techcarelogo"
                src={techcarelogo}
              >
                </Box>
               <p style={{marginRight:0,width:'100%',overflow:'hidden',fontSize:'90%'}}>{username}</p>
              <IconButton id="closeButton" onClick={handleDrawerClose}>
              <ChevronLeftIcon />
              </IconButton>
              </div>
          : <IconButton id="openButton" onClick={handleDrawerOpen}>
              <ChevronRightIcon />
          </IconButton>}
          
          
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Inventory", "Patients"].map((text, index) => (
            <a style={{textDecoration: 'none', color: 'white'}} href={text} key={index}><ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {text == "Dashboard" && <DashboardIcon />}
                  {text == "Inventory" && <InventoryIcon />}
                  {text == "Patients" && <AccountCircleIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default MainPage;