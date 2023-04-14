import React from "react";
import { IDataMovie } from "../../../../../models/DataMovie";
import { Filter } from "../../models";
import { ITmdb } from "../../../../../models/Itmdb";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { uniqueObjectList } from "../../../../../helpers/utils/uniqueObjectList";
type Props = {
  dataMovies?: IDataMovie[];
  filters: Filter;
};

function filterAllMovies(dataMovies?: IDataMovie[]) {
  if (dataMovies) {
    const dataFiltered = dataMovies.reduce((acc, data) => {
      acc = [...acc, ...data.list];
      return acc;
    }, [] as ITmdb[]);

    return uniqueObjectList(dataFiltered, "title");
  }

  return [];
}

export function useFilteredMovies({ dataMovies, filters }: Props) {
  const { dataMoviesGenre } = useSelector((state: RootState) => state.movies);

  const filteredAllMovies = React.useMemo(() => {
    if (dataMovies) {
      const dataFiltered = dataMovies.reduce((acc, data) => {
        acc = [...acc, ...data.list];
        return acc;
      }, [] as ITmdb[]);

      return uniqueObjectList(dataFiltered, "title");
    }

    return [];
  }, []);

  const displayMovies = React.useMemo(() => {
    let filteredMovies =
      filters.category === "all" ? filteredAllMovies : dataMoviesGenre || [];

    if (!!filters.name) {
      filteredMovies =
        filteredMovies.length > 0
          ? filteredMovies.filter((movie) =>
              movie.title.toLowerCase().includes(filters.name!.toLowerCase())
            )
          : [];
    }

    return filteredMovies;
  }, [dataMoviesGenre, filters]);
  return { displayMovies };
}

