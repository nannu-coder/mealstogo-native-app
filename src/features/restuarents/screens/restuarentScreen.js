import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import FavouriteBar from "../../../components/Favourites/FavouriteBar";
import Loader from "../../../components/Loader/Loader";
import useFavourites from "../../../Hooks/useFavourites";
import useRestuarant from "../../../Hooks/useRestuarant";
import RestuarentInfo from "../Components/restuarent-info-component";
import { RestaurantList } from "../Components/RestuarentListStyle";
import SearchbarComponent from "../Components/Searchbar.Component";

const RestuarentScreen = ({ navigation }) => {
  const { restuarants, isLoading } = useRestuarant();
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useFavourites();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchbarComponent
        isFavToggle={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restuarants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestuarentDetail", { restuarent: item })
              }
            >
              <RestuarentInfo restuarent={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  list: {
    flex: 1,
  },
});

export default RestuarentScreen;
