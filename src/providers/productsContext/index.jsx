import { createContext, useContext } from "react";

import { productsList } from "../../data/productsList";

const ProductsContext = createContext({});

export const useProducts = () => {
  const context = useContext(ProductsContext);

  return context;
};

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider
      value={{
        productsList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
