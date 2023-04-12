import React from "react";
import { IDataMovie } from "../../../../../models/DataMovie";
import { Filter } from "../../models";
import { ITmdb } from "../../../../../models/Itmdb";
import { uniqueObjectList } from "../../../../../utils/uniqueObjectList";
type Props = {
  dataMovies?: IDataMovie[];
  filters: Filter;
};

export function useFilteredMovies({ dataMovies, filters }: Props) {
  const displayMovies = React.useMemo(() => {
    let filteredMovies =
      dataMovies && dataMovies.length > 0
        ? dataMovies.reduce<ITmdb[]>((acc, data) => {
            const newArr = [...acc, ...data.list];
            acc = uniqueObjectList(newArr, "title");
            return acc;
          }, [])
        : [];

    if (!!filters.category && filters.category !== "all") {
      filteredMovies =
        dataMovies && dataMovies.length > 0
          ? dataMovies.find(({ identify }) => filters.category === identify)
              ?.list || []
          : [];
    }

    if (!!filters.name) {
      filteredMovies =
        filteredMovies.length > 0
          ? filteredMovies.filter((movie) =>
              movie.title.toLowerCase().includes(filters.name!.toLowerCase())
            )
          : [];
    }

    return filteredMovies;
  }, [dataMovies, filters]);
  return { displayMovies };
}

