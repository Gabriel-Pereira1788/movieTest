import { FavoriteData } from "../../models/FavoriteModel";
import { FavoritesUseCase } from "./FavoritesUseCase";
import { ControlerImpl } from "./models";

export class FavoritesController implements ControlerImpl {
  useCases: FavoritesUseCase = new FavoritesUseCase();

  async getById(id: string | number): Promise<FavoriteData | null> {
    const data = await this.useCases.getById(id);

    if (!!data) {
      return {
        id: data.id,
        backdrop_path: data.backdrop_path,
        genres: data.genres,
        movie_id: data.movie_id,
        overview: data.overview,
        poster_path: data.poster_path,
        title: data.title,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
        cast: data.cast,
      };
    }
    return null;
  }

  async get(): Promise<FavoriteData[]> {
    const dataFavorites = await this.useCases.get();

    return dataFavorites.map((data) => ({
      id: data.id,
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      movie_id: data.movie_id,
      overview: data.overview,
      poster_path: data.poster_path,
      title: data.title,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
      cast: data.cast,
    }));
  }
  async create(data: FavoriteData): Promise<FavoriteData> {
    const dataCreated = await this.useCases.create(data);

    return {
      id: dataCreated.id,
      backdrop_path: dataCreated.backdrop_path,
      genres: dataCreated.genres,
      movie_id: dataCreated.movie_id,
      overview: dataCreated.overview,
      poster_path: dataCreated.poster_path,
      title: dataCreated.title,
      vote_average: dataCreated.vote_average,
      vote_count: dataCreated.vote_count,
      cast: data.cast,
    };
  }
  async delete(id: string): Promise<void> {
    await this.useCases.delete(id);
  }
}

