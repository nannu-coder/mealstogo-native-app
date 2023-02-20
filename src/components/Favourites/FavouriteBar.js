import React from "react";
import { Text } from "../typography/typography";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../Spacer/Spacer";
import { CompactRestaurantInfo } from "../Restuarant/CompactRestuarantInfo";

const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestuarentDetail", {
                    restuarent: restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

export default FavouriteBar;
