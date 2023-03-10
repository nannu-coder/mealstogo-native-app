import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
// import useLocation from "../../../Hooks/useLocation";

const SearchbarComponent = ({ onToggle, isFavToggle }) => {
  //   const { keyword, search } = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("sanfrancisco");

  // useEffect(()=>{
  //   setSearchKeyword(keyword)
  // },[])

  return (
    <View style={styles.searchBar}>
      <Searchbar
        icon={isFavToggle ? "heart" : "heart-outline"}
        onIconPress={onToggle}
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
