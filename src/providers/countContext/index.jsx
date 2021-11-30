import { createContext, useContext, useState } from "react";

const CountContext = createContext({});

const useCount = () => {
  const context = useContext(CountContext);

  return context;
};

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const subCount = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, addCount, subCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountProvider, useCount };
