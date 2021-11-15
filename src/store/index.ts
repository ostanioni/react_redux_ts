import { configureStore } from "@reduxjs/toolkit"
import sectionA from "./slices/sectionA"
import sectionB from "./slices/sectionB"

export const store = configureStore({
  reducer: {
    A: sectionA,
    B: sectionB
  }
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch