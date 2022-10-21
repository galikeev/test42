import { configureStore } from "@reduxjs/toolkit";
import vendingSlice from "./slices/vendingSlice";

const store = configureStore({
    reducer: {
        products: vendingSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
