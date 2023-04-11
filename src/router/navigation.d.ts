import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootParamListI = {
  Home:
    | undefined
    | {
        screen: "explore" | "home" | "favorites";
      };
  SingleMovie: { id: number };
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamListI {}
  }
}
export type NavigationProps<T = keyof RootParamListI> = NativeStackScreenProps<
  RootParamListI,
  T
>;

