import { configureStore } from '@reduxjs/toolkit'
import contacsSlice from './contactsSlice'

const store = configureStore({
  reducer: {
    contacts: contacsSlice,
  },
})

export default store
