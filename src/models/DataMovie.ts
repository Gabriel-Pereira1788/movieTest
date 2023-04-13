import { Cast, ITmdb } from "./Itmdb";

export interface IRandomData {
  randomList: IDataMovie;
  randomMedia: ITmdb;
}

export interface IDataMovie {
  identify: GenreIdentify;
  title: string;
  list: ITmdb[];
}

export interface ISingleMovie extends ITmdb {
  cast: Cast[];
}

