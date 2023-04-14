import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Router from "./src/router/Router";
import Modal from "./src/components/Modal/View";
import Providers from "./src/providers";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
    FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf"),
    Fontisto: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Fontisto.ttf"),
  });
  return (
    <Providers>
      <StatusBar style="light" />
      <Router />
      <Modal />
    </Providers>
  );
}

