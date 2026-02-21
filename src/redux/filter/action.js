import { FILTER_CONTACTS } from "./type";
import { createAction } from "@reduxjs/toolkit";


export const filterContacts = createAction(FILTER_CONTACTS)