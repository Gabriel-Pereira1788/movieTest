import { tableSchema } from "@nozbe/watermelondb";

export const FavoritesSchema = tableSchema({
  name: "favorites",
  columns: [
    { name: "movie_id", type: "number" },
    { name: "title", type: "string" },
    { name: "vote_count", type: "number" },
    { name: "vote_average", type: "number" },
    { name: "genres", type: "string" },
    { name: "cast", type: "string" },
    { name: "overview", type: "string" },
    { name: "backdrop_path", type: "string" },
    { name: "poster_path", type: "string" },
  ],
});

