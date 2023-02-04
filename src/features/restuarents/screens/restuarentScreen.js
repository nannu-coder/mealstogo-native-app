import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestuarentInfo from "../Components/restuarent-info-component";

const RestuarentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestuarentInfo />
      </View>
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
    backgroundColor: "green",
    flex: 1,
  },
});

export default RestuarentScreen;
