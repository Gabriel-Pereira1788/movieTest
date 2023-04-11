import { TMDB_KEY } from "../../constants/TMDB";
import { IDataMovie } from "../../models/DataMovie";
import { api } from "../api";

const mountURL = (route: string, media: string): string =>
  `/discover/${media}?api_key=${TMDB_KEY}&language=pt-BR&${route}`;

async function fetchData(url: string) {
  const { data } = await api.get(url);

  return data.results;
}

async function getMoviesByCategory(category: string) {
  return await fetchData(
    `/movie/${category}?api_key=${TMDB_KEY}&language=pt-BR&page=1`
  );
}

async function getMovieById(id: number) {
  const { data } = await api.get(
    `/movie/${id}?api_key=${TMDB_KEY}&language=pt-BR`
  );
  return data;
}

async function getMoviesList(): Promise<IDataMovie[]> {
  console.log("get");
  return [
    {
      identify: "popular",
      title: "Em alta",
      list: await fetchData(
        `/movie/popular?api_key=${TMDB_KEY}&language=pt-BR&page=1`
      ),
    },
    {
      identify: "top",
      title: "Relevantes",
      list: await fetchData(
        `/movie/top_rated?language=pt-BR&api_key=${TMDB_KEY}`
      ),
    },
    {
      identify: "action",
      title: "Ação",
      list: await fetchData(mountURL("with_genres=28", "movie")),
    },
    {
      identify: "comedy",
      title: "Comedia",
      list: await fetchData(mountURL("with_genres=35", "movie")),
    },
    {
      identify: "horror",
      title: "Terror",
      list: await fetchData(mountURL("with_genres=27", "movie")),
    },
    {
      identify: "romance",
      title: "Romance",
      list: await fetchData(mountURL("with_genres=10749", "movie")),
    },
    {
      identify: "documentaries",
      title: "Documentarios",
      list: await fetchData(mountURL("with_genres=99", "movie")),
    },
  ];
}

export const MoviesAPI = {
  getMoviesList,
  getMoviesByCategory,
  getMovieById,
};

