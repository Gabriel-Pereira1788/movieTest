import { tableSchema } from "@nozbe/watermelondb";

export const FavoritesSchema = tableSchema({
  name: "favorites",
  columns: [
    { name: "movie_id", type: "string" },
    { name: "name", type: "string" },
  ],
});
