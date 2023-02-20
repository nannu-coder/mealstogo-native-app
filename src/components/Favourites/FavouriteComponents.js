import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import useFavourites from "../../Hooks/useFavourites";

const Favourite = ({ restuarant }) => {
  const { favourites, addToFav, removeFromFav } = useFavourites();

  const isFavourite = favourites.find((r) => r.placeId === restuarant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFav(restuarant) : removeFromFav(restuarant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9999;
`;

export default Favourite;
