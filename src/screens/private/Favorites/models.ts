import { FavoriteData } from "../../../repositories/database/models/FavoriteModel";

export interface FavoritesViewModel {
  dataFavorites: FavoriteData[];
  loading: boolean;
  error: any;
  searchText: string;
  handleSearchText: (value: string) => void;
}
