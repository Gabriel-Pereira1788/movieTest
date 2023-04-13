import { Cast, Genre, ITmdb } from "./Itmdb";

export interface FavoriteDTO {
  movie_id?: number;
  title?: string;
  vote_count?: number;
  vote_average?: number;
  genres?: Genre[];
  cast?: Cast[];
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
}

