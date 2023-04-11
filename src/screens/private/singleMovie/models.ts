import {
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { ISingleMovie } from "../../../models/DataMovie";

export type MostView = (
  event: GestureEvent<PanGestureHandlerEventPayload>
) => void;

export interface SingleMovieViewModel {
  dataMovie: ISingleMovie | null;
  loading: boolean;
  stylesAnimation: {
    flex: 1 | 3.5;
  };
  styleRotate: {
    transform: {
      rotate: string;
    }[];
  };
  toggleMostView: MostView;
}

