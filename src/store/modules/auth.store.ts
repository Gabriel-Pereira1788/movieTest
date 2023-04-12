import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";

interface State {
  loading: boolean;
  user: User | null;
  error?: any;
}

const initialState: State = {
  loading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state: State, action) {
      state.loading = action.payload;
    },
    setUser(state: State, action) {
      state.user = action.payload;
    },
    cleanUpAuth(state: State) {
      state = initialState;
    },
  },
});

export const { cleanUpAuth, setLoading, setUser } = authSlice.actions;

export default authSlice.reducer;

