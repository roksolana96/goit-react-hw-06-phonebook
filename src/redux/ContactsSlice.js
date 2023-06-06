import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const userReducer = contactSlice.reducer;


//   contacts: [],

// const AddContact = contact => {
//   setContacts([...contacts, contact])
//   };


// const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };