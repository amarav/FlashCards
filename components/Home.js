import React from "react";
import { View, Text } from "react-native";
import Decklist from './Decklist'

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Decklist />
      </View>
    );
  }

export default HomeScreen