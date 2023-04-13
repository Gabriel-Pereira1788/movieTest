import { FavoriteData, FavoriteModel } from "../../models/FavoriteModel";
import { FavoritesUseCase } from "./FavoritesUseCase";

export interface UseCaseImpl {
  get(): Promise<FavoriteModel[]>;
  getById(id: string): Promise<FavoriteModel | null>;
  create(data: FavoriteData): Promise<FavoriteModel>;
  delete(id: string): Promise<void>;
}

export interface ControlerImpl {
  useCases: FavoritesUseCase;
  get(): Promise<FavoriteData[]>;
  create(data: FavoriteData): Promise<FavoriteData>;
  getById(id: string): Promise<FavoriteData | null>;
}

