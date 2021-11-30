import { CartProvider } from "./cartContext";
import { CountProvider } from "./countContext";
import { ProductsProvider } from "./productsContext";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <CountProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CountProvider>
    </CartProvider>
  );
};

export default Providers;
