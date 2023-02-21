import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../components/Spacer/Spacer";
import { Text } from "../../components/typography/typography";
import { SafeArea } from "../../components/utility/SafeArea";
import useFavourites from "../../Hooks/useFavourites";
import RestuarentInfo from "../restuarents/Components/restuarent-info-component";
import { RestaurantList } from "../restuarents/Components/RestuarentListStyle";

const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useFavourites();

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestuarentDetail", {
                  restuarent: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestuarentInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export default FavouriteScreen;
