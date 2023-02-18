import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native";

const RestuarentDetails = ({ route }) => {
  //   const { restuarant } = route.params;
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Restuarent Details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default RestuarentDetails;
