import { ISingleMovie } from "../../../../../models/DataMovie";

export interface AddFavoriteViewModel {
  dataMovie: ISingleMovie | null;
  isFavorite: boolean;
  loading: boolean;
  error: any;
  status: "" | "error" | "success";
  toggleFavorite: () => Promise<void>;
}
