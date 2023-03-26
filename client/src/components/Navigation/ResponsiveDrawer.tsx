import { ReactNode, useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AccountMenu from "./AccountMenu";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { AppContext } from "../../store/StoreProvider";
import {
  NavBarItem,
  navBarItems,
  drawerPrivateItems,
  drawerPublicItems,
} from "./navItems";

const drawerWidth = 240;

interface Props {
  children?: ReactNode;
}

export function ResponsiveDrawer(props: Props) {
  const { children } = props;
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const { loggedIn } = state;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(logo.jpg)",
        }}
      />
      <Divider />
      <List>
        {drawerPublicItems.map(({ value, path, icon }) => (
          <NavBarItem
            icon={icon}
            path={path}
            key={value}
            value={value}
            navigate={navigate}
            onClick={handleDrawerToggle}
          />
        ))}
      </List>
      <Divider />
      {loggedIn && (
        <List>
          {drawerPrivateItems.map(({ value, path, icon }) => (
            <NavBarItem
              key={value}
              path={path}
              icon={icon}
              value={value}
              navigate={navigate}
              onClick={handleDrawerToggle}
            />
          ))}
        </List>
      )}
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navBarItems.map(({ value, path }) => (
              <Button
                key={value}
                onClick={() => navigate(path)}
                sx={{
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {value}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {loggedIn && (
            <Box>
              <AccountMenu />
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="general pages"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          open={mobileOpen}
          variant="temporary"
          disableScrollLock={true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
