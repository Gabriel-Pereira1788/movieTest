import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

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

