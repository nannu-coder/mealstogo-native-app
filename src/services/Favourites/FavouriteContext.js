import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "../../Hooks/useAuth";

const FavouritesContext = createContext();

const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuth();

  const add = (restuarant) => {
    setFavourites([...favourites, restuarant]);
  };

  const remove = (restuarant) => {
    const newFavourite = favourites.filter(
      (x) => x.placeId !== restuarant.placeId
    );
    setFavourites(newFavourite);
  };

  const storeFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      getFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      storeFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, removeFromFav: remove, addToFav: add }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouriteContextProvider };
