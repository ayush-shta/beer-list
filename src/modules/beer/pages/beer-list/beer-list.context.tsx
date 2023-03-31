import React, { createContext, useContext, useMemo, useState } from 'react';

interface IBeerListContext {
  isAddBeerFormVisible: boolean;
  showAddBeerForm: () => void;
  hideAddBeerForm: () => void;
}

interface IBeerListContextProps {
  children: React.ReactNode;
}

const BeerListContext = createContext<IBeerListContext>({
  isAddBeerFormVisible: false,
  showAddBeerForm: () => {},
  hideAddBeerForm: () => {}
});

export const BeerListContextProvider = ({ children }: IBeerListContextProps) => {
  const [isAddBeerFormVisible, setIsAddBeerFormVisible] = useState(false);

  const contextValue: IBeerListContext = useMemo(
    () => ({
      isAddBeerFormVisible,
      showAddBeerForm: () => setIsAddBeerFormVisible(true),
      hideAddBeerForm: () => setIsAddBeerFormVisible(false)
    }),
    [isAddBeerFormVisible]
  );

  return <BeerListContext.Provider value={contextValue}>{children}</BeerListContext.Provider>;
};

export const useBeerListContext = () => useContext(BeerListContext);
