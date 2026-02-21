import { ADD_CONTACT, REMOVE_CONTACT } from "./type";
import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction(ADD_CONTACT)
export const removeContact = createAction(REMOVE_CONTACT)