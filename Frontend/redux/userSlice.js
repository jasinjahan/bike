import { createSlice } from "@reduxjs/toolkit";

// 🔒 Safe JSON parser
const safeParse = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const initialState = {
  users: safeParse("users", []),
  user: safeParse("user", null),
  isAuthenticated: safeParse("isAuthenticated", false),
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userRegister: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    userLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    userLogout: (state,action) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.setItem("isAuthenticated", "false");
      localStorage.removeItem("user"); // ✅ FIX
    },
  },
});

export const { userRegister, userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
