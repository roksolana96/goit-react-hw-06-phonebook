import { createSlice } from '@reduxjs/toolkit'


export const valueSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContacts: (state, action) => {

        state.value += 1
    },
        deleteContacts: (state, action) => {

        state.value += 1
    },
        FilterContacts: (state, action) => {

        state.value += 1
      },
    },
  })

export const { ContactFormAdd, deleteContacts, FilterContacts } = valueSlice.actions

// export default valueSlice.reducer
//   contacts: [],
//   filter: ""
