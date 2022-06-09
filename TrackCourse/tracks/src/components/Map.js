import React, { useContext } from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
   const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }


  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
       />
       <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};


const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;



//   style={styles.map}
//   initialRegion={{
//     latitude:	38.70314,
//     longitude:-9.27666,
//     latitudeDelta:0.22,
//     longitudeDelta:0.22
//   }}


//! Generates a random point course

    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //   if (i % 2 === 0) {
    //     points.push({
      //       latitude:38.70314 + i * 0.001,
      //       longitude: -9.27666 + i * 0.001
    //     });
    //   } else {
    //     points.push({
    //     latitude:38.70314 - i * 0.002,
    //     longitude: -9.27666 + i * 0.002
    //    });
    //   }
    // }

    {/* <Polyline coordinates={points} /> */}
