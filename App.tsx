import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Router from "./src/router/Router";
import Modal from "./src/components/Modal/View";
import Providers from "./src/providers";

export default function App() {
  return (
    <Providers>
      <StatusBar style="light" />
      <Router />
      <Modal />
    </Providers>
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

