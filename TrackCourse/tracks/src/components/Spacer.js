//!4 Step --- Helper component --- To apply some margin to a child component ---
import React from "react";
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children })  => {
  return (
    <View style={styles.spacer}>{children}</View>
  )
};

const styles = StyleSheet.create({
spacer: {
  margin: 12,
}
});

export default Spacer;
