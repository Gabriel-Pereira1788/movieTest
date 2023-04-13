import { Q } from "@nozbe/watermelondb";
import { database } from "../../db";
import { FavoriteModel, FavoriteData } from "../../models/FavoriteModel";
import { UseCaseImpl } from "./models";

export class FavoritesUseCase implements UseCaseImpl {
  async getById(id: string | number): Promise<FavoriteModel | null> {
    const favoriteData = await database
      .get<FavoriteModel>("favorites")
      .query(Q.where("movie_id", id));

    return favoriteData.length > 0 ? favoriteData[0] : null;
  }
  async get(): Promise<FavoriteModel[]> {
    const collection = database.get<FavoriteModel>("favorites");
    const response = await collection.query().fetch();

    return response;
  }
  async create(favorite: FavoriteData): Promise<FavoriteModel> {
    let dataFavorite: FavoriteModel;

    dataFavorite = await database.write(async () => {
      return await database.get<FavoriteModel>("favorites").create((data) => {
        data.movie_id = favorite.movie_id;
        data.title = favorite.title;
        data.vote_count = favorite.vote_count;
        data.vote_average = favorite.vote_average;
        data.genres = favorite.genres;
        data.overview = favorite.overview;
        data.backdrop_path = favorite.backdrop_path;
        data.poster_path = favorite.poster_path;
        data.cast = favorite.cast;
      });
    });

    return dataFavorite;
  }

  async delete(id: string): Promise<void> {
    const favoriteData = await database
      .get<FavoriteModel>("favorites")
      .find(id);

    if (favoriteData) {
      await database.write(async () => {
        await favoriteData.destroyPermanently();
      });
    }
  }
}

