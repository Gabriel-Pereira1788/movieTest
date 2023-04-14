import React from "react";
import auth from "@react-native-firebase/auth";
import { formatUser } from "../../helpers/utils/formatUser";
import { useAppDispatch } from "../../store/store";
import { cleanUpAuth, setUser } from "../../store/modules/auth.store";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    auth().onAuthStateChanged((userCredentials) => {
      console.log("user-credentials", userCredentials);
      if (userCredentials && userCredentials.displayName) {
        const dataUser = formatUser(
          userCredentials,
          userCredentials.displayName
        );
        dispatch(setUser(dataUser));
      } else {
        dispatch(cleanUpAuth());
      }
    });
  }, []);
  return <>{children}</>;
}

