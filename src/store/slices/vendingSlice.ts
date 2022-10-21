import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id: number;
    name: string;
    type: string;
    price: number;
};

type ProductState = {
    money: number;
    productChoose: number;
    products: Product[];
};

const initialState: ProductState = {
    money: 0,
    productChoose: 0,
    products: [
        {
            id: 1,
            name: "Lays",
            type: "Chips",
            price: 75,
        },
        {
            id: 2,
            name: "Coca-Cola",
            type: "Drink",
            price: 180,
        },
        {
            id: 3,
            name: "Light",
            type: "Rusks",
            price: 220,
        },
        {
            id: 4,
            name: "Chaka",
            type: "Peanut",
            price: 600,
        },
        {
            id: 5,
            name: "Water",
            type: "Drink",
            price: 40,
        },
        {
            id: 6,
            name: "Fanta",
            type: "Cold drink",
            price: 400,
        },
        {
            id: 7,
            name: "Nutella",
            type: "Chocolate paste",
            price: 550,
        },
    ],
};

const vendingSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addMoney: (state, action: PayloadAction<number>) => {
            state.money = action.payload;
        },
        addProductNumber: (state, action: PayloadAction<number>) => {
            state.productChoose = action.payload;
        },
    },
});

export const { addMoney, addProductNumber } = vendingSlice.actions;

export default vendingSlice.reducer;
