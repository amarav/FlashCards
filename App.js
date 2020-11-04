import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import MainComponent from './components/MainComponent'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default function App() {
  return (
      <View style={{flex: 1}}>
      <Provider store={createStore(reducer)}>
      <MainComponent />
      </Provider>
           
      </View>
  );
}
