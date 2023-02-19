import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components";
import Loader from "../../../components/Loader/Loader";
import useRestuarant from "../../../Hooks/useRestuarant";
import RestuarentInfo from "../Components/restuarent-info-component";
import SearchbarComponent from "../Components/Searchbar.Component";

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestuarentScreen = ({ navigation }) => {
  const { restuarants, isLoading } = useRestuarant();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchbarComponent />

      <RestaurentList
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
