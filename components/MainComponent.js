import "react-native-gesture-handler";
import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
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
        component={HomeScreen}
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainComponent;
