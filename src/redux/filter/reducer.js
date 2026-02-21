import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./action";

const initialState = '';

export const reducer = createReducer(initialState, builder => {
    builder.addCase(filterContacts, (state, action) => {
        return action.payload
    })
})