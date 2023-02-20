import React, { useState } from "react";
import { StatusBar, Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import SearchbarComponent from "../../map/Components/SearchComponents";
// import { useLocation } from "react-router-dom";
// import useRestuarant from "../../../Hooks/useRestuarant";

const MapScreen = () => {
  // const {location} = useLocation();
  // const { restuarants } = useRestuarant();
  // const [latDelta, setLatDelta] = useState(0);
  // const { lat, lng, viewport } = location;

  // useEffect(() => {
  //   const northeastLat = viewport.northeast.lat;
  //   const southwestLat = viewport.southwest.lat;

  //   setLatDelta(northeastLat - southwestLat);
  // }, [location, viewport]);

  return (
    <MapContainer>
      <SearchbarComponent />
      <MapView
        style={styles.map}
        region={
          {
            // latitude: lat,
            // longitude: lng,
            // latitudeDelta: latDelta,
            // longitudeDelta: 0.01,
          }
        }
      >
        {/* {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestuarentDetail", {
                    restaurent:restuarant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })} */}
      </MapView>
    </MapContainer>
  );
};

const MapContainer = styled.View`
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : null};
`;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
