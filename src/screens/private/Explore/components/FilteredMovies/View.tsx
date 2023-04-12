import React from "react";
import * as S from "native-base";
import { IDataMovie } from "../../../../../models/DataMovie";
import { Filter } from "../../models";
import { useFilteredMovies } from "./useFilteredMovies";
import CardMovie from "../CardMovie/View";
import { SIZES } from "../../../../../helpers/constants/sizes";

interface FilteredMoviesProps {
  filters: Filter;
  dataMovies?: IDataMovie[];
}

function FilteredMovies({ dataMovies, filters }: FilteredMoviesProps) {
  const { displayMovies } = useFilteredMovies({ dataMovies, filters });
  return (
    <S.FlatList
      data={displayMovies}
      showsVerticalScrollIndicator={false}
      numColumns={1}
      contentContainerStyle={{
        flexGrow: 1,
        width: SIZES.width,
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
      renderItem={({ item, index }) => {
        if (item.backdrop_path) {
          return (
            <CardMovie
              w={SIZES.width - 50}
              h={SIZES.height / 2 - 20}
              key={index}
              {...item}
            />
          );
        }

        return <></>;
      }}
    />
  );
}

export default React.memo(FilteredMovies);

