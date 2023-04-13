import { appSchema } from "@nozbe/watermelondb";
import { FavoritesSchema } from "./Favorites";

export const schemas = appSchema({
  version: 1,
  tables: [FavoritesSchema],
});
