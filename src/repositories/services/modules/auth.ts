import { User } from "../../../models/User";

async function setUser(dataUser: User) {
  console.log(dataUser);
}

async function persistUser() {
  return {};
}

export const Auth = {
  setUser,
  persistUser,
};

