import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/router/Router";
import WrapperProvider from "./src/components/WrapperProvider";
import Modal from "./src/components/Modal/View";

export default function App() {
  return (
    <WrapperProvider>
      <StatusBar style="light" />
      <Router />
      <Modal />
    </WrapperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    justifyContent: "center",
  },
});

