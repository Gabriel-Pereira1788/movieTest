import { Cast, ITmdb } from "./Itmdb";

export interface IRandomData {
  randomList: IDataMovie;
  randomMedia: ITmdb;
}

export interface IDataMovie {
  identify: string;
  title: string;
  list: ITmdb[];
}

export interface ISingleMovie {
  data: ITmdb;
  cast: Cast[];
}

