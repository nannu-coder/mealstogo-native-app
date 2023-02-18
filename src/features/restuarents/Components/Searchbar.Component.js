import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import useLocation from "../../../Hooks/useLocation";

const SearchbarComponent = () => {
  //   const { keyword, search } = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("sanfrancisco");

  return (
    <View style={styles.searchBar}>
      <Searchbar
        elevation={5}
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          // search(searchKeyword)
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 16,
  },
});

export default SearchbarComponent;
