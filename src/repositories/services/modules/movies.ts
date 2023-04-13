import { TMDB_GENRES, TMDB_KEY } from "../../../helpers/constants/TMDB";
import { IDataMovie, ISingleMovie } from "../../../models/DataMovie";
import { api } from "../api";

const mountURL = (route: string, media: string): string =>
  `/discover/${media}?api_key=${TMDB_KEY}&language=pt-BR&${route}`;

async function fetchData(url: string) {
  const { data } = await api.get(url);

  return data.results;
}

async function getMoviesByGenre(genre: GenreIdentify) {
  if (genre === "top" || genre === "popular") {
    return await fetchData(
      `/movie/${genre}?api_key=${TMDB_KEY}&language=pt-BR&page=1`
    );
  }
  const getIdentify = TMDB_GENRES.find(
    (dataGenre) => dataGenre.identify === genre
  );
  return await fetchData(mountURL(`with_genres=${getIdentify?.id}`, "movie"));
}

async function getMovieById(id: number): Promise<ISingleMovie> {
  const dataMOvieUrl = `/movie/${id}?api_key=${TMDB_KEY}&language=pt-BR`;
  const dataCreditsUrl = `/movie/${id}/credits?api_key=${TMDB_KEY}&language=pt-BR`;
  const { data } = await api.get(
    `/movie/${id}?api_key=${TMDB_KEY}&language=pt-BR`
  );

  const [{ data: dataMovie }, { data: dataCredits }] = await Promise.all([
    api.get(dataMOvieUrl),
    api.get(dataCreditsUrl),
  ]);
  return {
    ...dataMovie,
    cast: dataCredits.cast,
  };
}

async function getMoviesList(): Promise<IDataMovie[]> {
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
  getMoviesByGenre,
  getMovieById,
};

