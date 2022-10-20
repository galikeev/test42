import { configureStore } from "@reduxjs/toolkit";
import vendingSlice from "./slices/vendingSlice";

export default configureStore({
    reducer: {
        products: vendingSlice,
    },
});
