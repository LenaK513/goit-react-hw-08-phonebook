import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare(name, number) {
      //   return {
      //     payload: {
      //       name,
      //       number,
      //       id: nanoid(),
      //     },
      //   };
      // },
    },

    deleteContact(state, action) {
      // const index = state.findIndex(contact => contact.id === action.payload);

      // state.splise(index, 1);
      state.splice(
        0,
        state.length,
        ...state.filter(contact => contact.id !== action.payload)
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
