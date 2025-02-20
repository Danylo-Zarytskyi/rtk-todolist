import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice';
import swapiReducer from './slices/swapiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      todoS: todoReducer,
      swapi: swapiReducer
    }
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
