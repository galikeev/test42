import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    money: "",
    productChoose: "",
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
        addMoney: (state, { payload }) => {
            state.money = payload;
        },
        addProductNumber: (state, { payload }) => {
            state.productChoose = payload;
        },
    },
});

export const { addMoney, addProductNumber } = vendingSlice.actions;

export default vendingSlice.reducer;
