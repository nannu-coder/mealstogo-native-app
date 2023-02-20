import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const storeFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  useEffect(() => {
    storeFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, removeFromFav: remove, addToFav: add }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouriteContextProvider };
