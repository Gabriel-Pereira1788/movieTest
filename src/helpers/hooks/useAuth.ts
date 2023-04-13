import { AuthDTO } from "../../models/User";
import authFB from "@react-native-firebase/auth";
import { formatUser } from "../utils/formatUser";
import { useStorage } from "./useStorage";
import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/modules/auth.store";
export function useAuth() {
  const { saveImage } = useStorage();
  const dispatch = useAppDispatch();
  async function signUp(data: AuthDTO) {
    const result = await authFB().createUserWithEmailAndPassword(
      data.email,
      data.password!
    );

    if (result.user) {
      result.user.updateProfile({
        displayName: data.name!,
      });
    }
  }

  async function signIn(data: AuthDTO) {
    const result = await authFB().signInWithEmailAndPassword(
      data.email,
      data.password!
    );
  }

  async function edit(data: AuthDTO) {
    await authFB().currentUser?.updateEmail(data.email);
    await saveImage(data.photoURL, (url) => {
      authFB()
        .currentUser?.updateProfile({
          displayName: data.name,
          photoURL: url,
        })
        .then(() => {
          const user = authFB().currentUser;
          if (user) {
            const dataUser = formatUser(user, data.name!);
            dispatch(setUser(dataUser));
          }
        });
    });
  }

  async function signOut() {
    await authFB().signOut();
  }

  return { signIn, signUp, edit, signOut };
}

