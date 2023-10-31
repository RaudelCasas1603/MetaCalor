import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  
  export default function NavListDrawer({ onClick, navArrayLinks, NavLink, setOpen }) {
    return (
      <Box
        sx={{ width: 250 }}
        onClick={onClick}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {navArrayLinks.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={()=> setOpen(false)}
                >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    );
  }
  