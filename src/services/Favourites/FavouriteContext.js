import React, { useState, createContext } from "react";

const FavouritesContext = createContext();

const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restuarant) => {
    setFavourites([...favourites, restuarant]);
  };

  const remove = (restuarant) => {
    const newFavourite = favourites.filter(
      (x) => x.placeId !== restuarant.placeId
    );
    setFavourites(newFavourite);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, removeFromFav: remove, addToFav: add }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouriteContextProvider };
