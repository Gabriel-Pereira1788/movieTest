import { ITmdb } from "../../../models/Itmdb";

export interface HomeViewModel {
  popularMovies: ITmdb[];
  error: any;
  loading: boolean;
  focusMovie: ITmdb | null;
}

