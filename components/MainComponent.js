import "react-native-gesture-handler";
import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppStatusBar from "./statusBar";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Home";
import Reset from "./Reset";
import AddDeck from "./AddDeck";
import DeckDetails from "./DeckDetails";
import Decklist from "./Decklist";
import AddQuest from "./AddQuest";
import MainStackNavigator from "./MainStackNavigator";
import Quiz from './Quiz'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "maroon" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <View>
              {Platform.OS === "ios" ? (
                <Icon
                  style={[{ color: tintColor }]}
                  size={25}
                  name={"ios-home"}
                />
              ) : (
                <Icon
                  style={[{ color: tintColor }]}
                  size={25}
                  name={"md-home"}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={AddDeck}
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ tintColor }) => (
            <View>
              {Platform.OS === "ios" ? (
                <Icon
                  style={[{ color: tintColor }]}
                  size={25}
                  name={"ios-add"}
                />
              ) : (
                <Icon
                  style={[{ color: tintColor }]}
                  size={25}
                  name={"md-add"}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainComponent() {
  return (
    <View style={{ flex: 1 }}>
      <AppStatusBar backgroundColor="dimgray" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: "#101010",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#ffd700",
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ title: "Home Screen" }}
          />
          <Stack.Screen
            name="Decklist"
            component={Decklist}
            options={{ title: "Deck List" }}
          />
          <Stack.Screen
            name="DeckDetails"
            component={DeckDetails}
            options={({ route }) => ({
               title: route.params.deck.title
            })}
          />
          <Stack.Screen
            name="AddQuest"
            component={AddQuest}
            options={({ route }) => ({
               title: "Add Card"
            })}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={({ route }) => ({
               title: Quiz
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default MainComponent;
