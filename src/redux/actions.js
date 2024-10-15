import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContacts");

export const setSearchFilter = createAction("filters/setSearchFilter");
