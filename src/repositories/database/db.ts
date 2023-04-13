import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { schemas } from "./schemas";
import { Database } from "@nozbe/watermelondb";
import { FavoriteModel } from "./models/FavoriteModel";

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: [FavoriteModel],
});
