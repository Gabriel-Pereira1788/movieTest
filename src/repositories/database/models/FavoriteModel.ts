import { Model } from "@nozbe/watermelondb";
import { date, field, relation } from "@nozbe/watermelondb/decorators";

export class FavoriteModel extends Model {
  static table = "favorites";

  @field("movie_id")
  movie_id?: string;
  @field("name")
  name?: string;
}

