import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        data: JSON.parse(localStorage.getItem('collection')) || [],
        tab: 'photo'
    },
    reducers: {
        addCard(state, action) {
            state.data = action.payload
        },
        removeCard(state, action) {
            state.data = action.payload;
        },
        setTab(state, action) {
            state.tab = action.payload
        }
    }
});

export const { addCard, removeCard, setTab } = collectionSlice.actions;
export default collectionSlice.reducer