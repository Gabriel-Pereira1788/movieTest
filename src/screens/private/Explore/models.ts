import { IDataMovie } from "../../../models/DataMovie";
import { Genre } from "../../../models/Itmdb";

export interface Filter {
  name?: string;
  category?: GenreIdentify;
}

export interface ExploreViewModel {
  dataMovies: IDataMovie[];
  error: any;
  categories: Genre[];
  loading: boolean;
  filters: Filter;
  handleFilters: (filter: Filter) => void;
}

