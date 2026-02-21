
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./action";

const initialState = [] 


export const reducer = createReducer(initialState, builder => {
  builder.addCase(addContact, (state, action) => {
    return [...state, action.payload];
  }).addCase(removeContact, (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  });
});