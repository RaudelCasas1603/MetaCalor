import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  
  import MenuIcon from "@mui/icons-material/Menu";
  import { NavLink } from "react-router-dom";
  
  import { useState } from "react";
  //import NavListDrawer from "./NavListDrawer";
  import { Box } from "@mui/system";
  
  export default function NavbarLoged({navArrayLinks}) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <AppBar position="static" sx={{ backgroundColor: '#34495E'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              MetaCalor
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navArrayLinks.map((link) => (
                <Button
                  key={link.title}
                  component={NavLink}
                  sx={{ color: "#fff" }}
                  to={link.path}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
  
        {/* <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <NavListDrawer
            onClick={() => setOpen(false)}
            navArrayLinks={navArrayLinks}
            NavLink={NavLink}
            setOpen={setOpen}
          />
        </Drawer> */}
      </>
    );
  }
  