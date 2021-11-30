import { Button, Typography, Box, Divider } from "@mui/material";

import { useCart } from "../../providers/cartContext";
import { useCount } from "../../providers/countContext";

function ProductCardCart({ name, price, id }) {
  const product = {
    name: name,
    id: id,
  };

  const { subCount } = useCount();
  const { subItem } = useCart();

  const handleSub = () => {
    subItem(product);
    subCount();
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          width: "250px",
        }}
      >
        <Typography variant="body1" sx={{ mr: "auto" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mr: "20px" }}>
          R${price},00
        </Typography>
        <Button
          variant="outlined"
          sx={{ padding: "2px", minWidth: "30px", width: "5px" }}
          onClick={handleSub}
        >
          X
        </Button>
      </Box>
      <Divider />
    </Box>
  );
}

export default ProductCardCart;
