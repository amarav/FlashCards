import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import MainComponent from './components/MainComponent'
import thunk from 'redux-thunk'
import logger from './middleware/logger'
import { applyMiddleware } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default function App() {
  return (
      <View style={{flex: 1}}>
      <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
      <MainComponent />
      </Provider>           
      </View>
  );
}
