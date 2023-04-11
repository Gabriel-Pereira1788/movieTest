import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/private/home/View";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/private/Explore/View";
import Favorites from "../screens/private/Favorites/View";

type Props = {};

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <NativeStack.Screen component={Home} name="home" />

      <NativeStack.Screen component={Explore} name="explore" />

      <NativeStack.Screen component={Favorites} name="favorites" />
    </NativeStack.Navigator>
  );
}

export default function Router({}: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
