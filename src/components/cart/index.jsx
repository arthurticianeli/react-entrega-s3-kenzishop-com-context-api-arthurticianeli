import { useState, useEffect } from "react";

import ProductCardCart from "../productCardCart";
import { Typography, Button, Box } from "@mui/material";
import { useCart } from "../../providers/cartContext";

function Cart({ handleDrawerClose }) {
  const { cartItems } = useCart();

  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, [cartItems]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          padding: "2px",
          minWidth: "30px",
          width: "5px",
          position: "absolute",
          left: "20px",
          top: "20px",
        }}
        onClick={handleDrawerClose}
      >
        X
      </Button>
      <Typography variant="h4">Carrinho</Typography>
      {cartEmpty ? (
        <Box sx={{ mt: "20px" }}>Carrinho Vazio</Box>
      ) : (
        <>
          {cartItems.map((e, i) => {
            return (
              <ProductCardCart
                key={i}
                name={e.name}
                price={e.price}
                img={e.img}
                id={i}
              />
            );
          })}
          <Typography variant="h6">
            Total - R${cartItems.reduce((a, b) => a + b.price, 0)},00
          </Typography>
          <Button>Comprar</Button>
        </>
      )}
    </Box>
  );
}

export default Cart;
