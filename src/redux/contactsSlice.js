import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload]
    },
    editContact: (state, action) => {
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      )
    },
    removeContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
  },
})

export const { addContact, editContact, removeContact } = contactsSlice.actions
export default contactsSlice.reducer
