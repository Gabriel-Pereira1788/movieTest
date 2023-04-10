import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/private/home/View";

type Props = {};

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const Stack = createStackNavigator();

export default function Router({}: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

