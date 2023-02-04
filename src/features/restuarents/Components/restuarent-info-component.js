import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const RestuarentInfo = ({ restuarent = {} }) => {
  const {
    name = "Some Restuarent",
    icon,
    photos = [
      "https://images.pexels.com/photos/2530386/pexels-photo-2530386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "100 street USA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarent;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 0,
  },

  cover: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 0,
  },
  text: {
    padding: 10,
  },
});

export default RestuarentInfo;
