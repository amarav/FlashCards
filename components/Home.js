import React from "react";
import { View, Text } from "react-native";
import Decklist from './Decklist'

function HomeScreen() {
    return (
      <View style={{ flex: 1,padding:25 }}>
        <Decklist />
      </View>
    );
  }

export default HomeScreen