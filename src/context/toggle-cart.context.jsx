import { createContext, useState } from "react";

export const ToggleCartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
});

export const ToggleCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };
  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
