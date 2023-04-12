import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootParamListI = {
  Home:
    | undefined
    | {
        screen: "explore" | "home" | "favorites";
      };
  SingleMovie: { id: number };
  SignIn: undefined;
  SignUp: undefined;
  MyAccount: undefined;
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

