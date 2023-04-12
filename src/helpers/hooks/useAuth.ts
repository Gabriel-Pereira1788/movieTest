import { AuthDTO } from "../../models/User";
import authFB from "@react-native-firebase/auth";

import { formatUser } from "../utils/formatUser";
import { Auth } from "../../repositories/services/modules/auth";
export function useAuth() {
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

  return { signIn, signUp };
}

