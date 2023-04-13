import { AnyAction, Dispatch, createSlice } from "@reduxjs/toolkit";
import { FavoritesController } from "../../repositories/database/useCases/Favorites/FavoritesController";
import { FavoriteData } from "../../repositories/database/models/FavoriteModel";
import { ISingleMovie } from "../../models/DataMovie";
import { ITmdb } from "../../models/Itmdb";

const favoritesController = new FavoritesController();

interface State {
  status: "success" | "error" | "";
  loading: boolean;
  actionLoading: boolean;
  dataFavorites: FavoriteData[];
  favoriteData: FavoriteData | null;
  error: any;
}

const initialState: State = {
  status: "",
  loading: false,
  actionLoading: false,
  dataFavorites: [],
  favoriteData: null,
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setActionLoading(state: State, action) {
      if (action.payload) {
        state.status = "";
      }
      state.actionLoading = action.payload;
    },
    setLoading(state: State, action) {
      if (action.payload) {
        state.status = "";
      }
      state.loading = action.payload;
    },
    getFavorites(state: State, action) {
      state.dataFavorites = action.payload;
      state.status = "success";
    },
    getSingleFavorite(state: State, action) {
      state.favoriteData = action.payload;
      state.status = "success";
    },
    setError(state: State, action) {
      state.error = action.payload;
      state.status = "error";
    },
    setStatus(state: State, action) {
      state.status = action.payload;
    },
    cleanUpFavorites(state: State) {
      state = initialState;
    },
  },
});

export const {
  setLoading,
  setActionLoading,
  getFavorites,
  setError,
  cleanUpFavorites,
  setStatus,
  getSingleFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

export function getAsyncFavorites() {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    dispatch(setLoading(true));
    try {
      const data = await favoritesController.get();
      dispatch(getFavorites(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function addToFavorite(dataMovie: ISingleMovie) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    dispatch(setLoading(true));
    try {
      const data = new FavoriteData(dataMovie);
      console.log("favoriteModel", data);
      await favoritesController.create(data);
      dispatch(setStatus("success"));
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function removeToFavorite(id: string) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    dispatch(setActionLoading(true));
    try {
      await favoritesController.delete(id);
      dispatch(setStatus("success"));
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    } finally {
      dispatch(setActionLoading(false));
    }
  };
}

export function getAsyncFavoriteByMovieId(movieId: number) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    dispatch(setActionLoading(true));
    try {
      const data = await favoritesController.getById(movieId);
      dispatch(getSingleFavorite(data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    } finally {
      dispatch(setActionLoading(false));
    }
  };
}

