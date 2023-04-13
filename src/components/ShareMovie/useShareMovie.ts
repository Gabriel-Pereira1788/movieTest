import Share from "react-native-share";
import { PATHS_NAME_ANDROID } from "../../helpers/constants/pathsName";
import { KeysApps } from "./models";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { alertRef } from "../Alert/View";
//*constants

export function useShareMovie() {
  const { dataMovie } = useSelector((state: RootState) => state.singleMovie);
  async function singleShare(sharedApp: KeysApps) {
    try {
      const { isInstalled } = await Share.isPackageInstalled(
        PATHS_NAME_ANDROID[sharedApp]
      );

      console.log(dataMovie?.data.imdb_id);
      const imdbId = dataMovie?.data.imdb_id;

      if (isInstalled && dataMovie?.data && imdbId) {
        await Share.shareSingle({
          social: Share.Social[sharedApp],
          url: `https://www.imdb.com/title/${imdbId}/`,
        });
      } else {
        alertRef.current?.open({
          isOpen: true,
          text: "verifique se o aplicativo está instalado",
          status: "warning",
        });
      }
    } catch (error) {}
  }

  function handleShare(shareWith: KeysApps) {
    return async () => {
      await singleShare(shareWith);
    };
  }

  return { handleShare };
}

