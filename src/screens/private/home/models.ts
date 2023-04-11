import { ITmdb } from "../../../models/Itmdb";

export interface HomeViewModel {
  popularMovies: ITmdb[];

  loading: boolean;
  focusMovie: ITmdb | null;
}

