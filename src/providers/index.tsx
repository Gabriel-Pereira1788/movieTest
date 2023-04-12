import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { MAIN } from "../styles/theme";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { store } from "../store/store";
import AuthProvider from "./modules/AuthProvider";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider theme={MAIN}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AuthProvider>{children}</AuthProvider>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
