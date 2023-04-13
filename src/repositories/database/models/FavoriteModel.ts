import { Model } from "@nozbe/watermelondb";
import { date, field, json, relation } from "@nozbe/watermelondb/decorators";
import { Cast, Genre, ITmdb } from "../../../models/Itmdb";
import { FavoriteDTO } from "../../../models/Database";
import { ISingleMovie } from "../../../models/DataMovie";

export class FavoriteModel extends Model {
  static table = "favorites";

  @field("movie_id")
  movie_id?: number;

  @field("title")
  title?: string;

  @field("vote_count")
  vote_count?: number;

  @field("vote_average")
  vote_average?: number;

  @json("genres", (json) => json)
  genres?: Genre[];

  @json("cast", (json) => json)
  cast?: Cast[];
  @field("overview")
  overview?: string;

  @field("backdrop_path")
  backdrop_path?: string;

  @field("poster_path")
  poster_path?: string;
}

export class FavoriteData implements FavoriteDTO {
  id?: string;
  movie_id?: number;
  title?: string;
  vote_count?: number;
  vote_average?: number;
  genres?: Genre[];
  cast?: Cast[];
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  constructor(data: ISingleMovie) {
    this.backdrop_path = data.backdrop_path;
    this.movie_id = data.id;
    this.title = data.title;
    this.vote_count = data.vote_count;
    this.vote_average = data.vote_average;
    this.genres = data.genres;
    this.overview = data.overview;
    this.poster_path = data.poster_path;
    this.cast = data.cast;
  }
}

