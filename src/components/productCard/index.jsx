import { Button, Typography, Box } from "@mui/material";

import { useCart } from "../../providers/cartContext";
import { useCount } from "../../providers/countContext";

function ProductCard({ name, price, img, id }) {
  const product = {
    name: name,
    price: price,
    id: id,
  };

  const { addCount } = useCount();
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    addCount();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        width: "fit-content",
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "100px",
          maxHeight: "100px",
          overflow: "hidden",
          padding: "10px",
        }}
      />
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">R${price},00</Typography>
      <Button variant="outlined" onClick={handleAdd}>
        Adicionar
      </Button>
    </Box>
  );
}

export default ProductCard;
