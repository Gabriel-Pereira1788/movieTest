import { IDataMovie } from "../../../models/DataMovie";

export interface Filter {
  name?: string;
  category?: string;
}

export interface ExploreViewModel {
  dataMovies: IDataMovie[];
  categories: {
    title: string;
    identify: string;
  }[];
  loading: boolean;
  filters: Filter;
  handleFilters: (filter: Filter) => void;
}

