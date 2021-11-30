import { Fab, Drawer, Box } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import Cart from "../cart";
import { useCount } from "../../providers/countContext";

function CartActionButton() {
  const { count } = useCount();

  const drawerWidth = 300;

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Fab
        color="primary"
        sx={{
          margin: 0,
          top: 130,
          right: 20,
          bottom: "auto",
          left: "auto",
          position: "fixed",
          ...(open && { display: "none" }),
        }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <ShoppingBagOutlinedIcon />
        {count !== 0 && (
          <Box
            sx={{
              position: "absolute",
              left: "30px",
              top: "30px",
              backgroundColor: "white",
              color: "primary.main",
              borderRadius: "100%",
              width: "25px",
            }}
          >
            {count}
          </Box>
        )}
      </Fab>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Cart handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
}

export default CartActionButton;
