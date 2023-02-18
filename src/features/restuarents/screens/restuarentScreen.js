import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import Loader from "../../../components/Loader/Loader";
import useRestuarant from "../../../Hooks/useRestuarant";
import RestuarentInfo from "../Components/restuarent-info-component";

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestuarentScreen = () => {
  const { restuarants, isLoading, error } = useRestuarant();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar elevation={5} placeholder="Search" />
      </View>
      <RestaurentList
        data={restuarants}
        renderItem={({ item }) => <RestuarentInfo restuarent={item} />}
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
  searchBar: {
    padding: 16,
  },
  list: {
    flex: 1,
  },
});

export default RestuarentScreen;
