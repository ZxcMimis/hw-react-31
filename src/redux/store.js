import { configureStore } from "@reduxjs/toolkit";
import { reducer as filterReducer } from "./filter/reducer";
import { reducer as contactsReducer } from "./contacts/reducer";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        contacts: contactsReducer
    }
})