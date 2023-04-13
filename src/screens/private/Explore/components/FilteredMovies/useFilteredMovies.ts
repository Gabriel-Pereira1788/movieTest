import React from "react";
import { IDataMovie } from "../../../../../models/DataMovie";
import { Filter } from "../../models";
import { ITmdb } from "../../../../../models/Itmdb";
import { uniqueObjectList } from "../../../../../helpers/utils/uniqueObjectList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
type Props = {
  dataMovies?: IDataMovie[];
  filters: Filter;
};

export function useFilteredMovies({ dataMovies, filters }: Props) {
  const { dataMoviesGenre } = useSelector((state: RootState) => state.movies);
  const displayMovies = React.useMemo(() => {
    let filteredMovies = dataMoviesGenre || [];

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

