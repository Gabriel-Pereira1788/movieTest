import { NativeBaseProvider } from "native-base";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../store/store";

type Props = {
  children: React.ReactNode;
};

export default function WrapperProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {children}
          </SafeAreaProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

