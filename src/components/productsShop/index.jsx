import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "../productCard";
import { useProducts } from "../../providers/productsContext";

function ProductsShop() {
  const { productsList } = useProducts();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90vw",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">
        Compre seus alimentos para uma dieta saudável
      </Typography>
      <Typography variant="body1">
        “Não comece uma dieta que terminará algum dia. Comece um estilo de vida
        que durará para sempre”
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {productsList.map((e) => (
          <ProductCard
            key={e.id}
            name={e.name}
            price={e.price}
            img={e.img}
            id={e.id}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProductsShop;
