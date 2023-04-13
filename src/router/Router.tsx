import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import * as S from "native-base";
import React from "react";
import Home from "../screens/private/home/View";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/private/Explore/View";
import Favorites from "../screens/private/Favorites/View";
import { RootParamListI } from "./navigation";
import SingleMovie from "../screens/private/singleMovie/View";
import AddFavorite from "../components/AddFavorite/View";
import SignIn from "../screens/public/SignIn/View";
import SignOut from "../screens/public/SignUp/View";
import SignUp from "../screens/public/SignUp/View";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import MyAccount from "../screens/private/MyAccount/View";
import ShareMovie from "../components/ShareMovie/View";

type Props = {};

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const NativeStack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => <></>,
      }}
    >
      <NativeStack.Screen component={Home} name="home" />

      <NativeStack.Screen component={Explore} name="explore" />

      <NativeStack.Screen component={Favorites} name="favorites" />
    </NativeStack.Navigator>
  );
}

const Stack = createStackNavigator<RootParamListI>();

export default function Router({}: Props) {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log("user", user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        {!user ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerTransparent: true,
                headerTitle: "",
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerTransparent: true,
                headerTitle: "",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeNavigator}
              options={{
                headerTransparent: true,
                headerTitle: "",
              }}
            />
            <Stack.Screen
              name="SingleMovie"
              component={SingleMovie}
              options={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: "#fff",
                headerRight: () => (
                  <S.HStack space={2}>
                    <AddFavorite />
                    <ShareMovie />
                  </S.HStack>
                ),
              }}
            />
            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
              options={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: "#fff",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

