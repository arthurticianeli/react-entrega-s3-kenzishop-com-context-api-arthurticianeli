import Hero from "./components/hero";
import Navigation from "./components/navigation";
import ProductsShop from "./components/productsShop";
import CartActionButton from "./components/cartActionButton";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <ProductsShop />
        </Grid>
      </Grid>
      <CartActionButton />
    </>
  );
}

export default App;
