import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import MainComponent from './components/MainComponent'

export default function App() {
  return (
      <View style={{flex: 1}}>
           <MainComponent />
      </View>
  );
}
