import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { getAsyncSingleMovie } from "../../../store/modules/singleMovie.store";

type Props = {
  id: number;
};

export function useSingleMovie({ id }: Props) {
  const { dataMovie, loading } = useSelector(
    (state: RootState) => state.singleMovie
  );

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAsyncSingleMovie(id));
  }, []);

  return { dataMovie, loading };
}

