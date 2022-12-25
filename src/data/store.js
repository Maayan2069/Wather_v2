import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherApi from "./services/weather";

const defaultState = {
  isLogin: false
};

const AuthReducer = (state = defaultState, { type, payload = "" }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false
      };
    case "logout":
      break;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    auth: AuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware)
});

setupListeners(store.dispatch);
