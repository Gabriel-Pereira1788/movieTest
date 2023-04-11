import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootParamListI = {
  Home: undefined;
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

