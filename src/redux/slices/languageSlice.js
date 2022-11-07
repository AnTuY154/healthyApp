import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  language: "en",

};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: () => {},
    changeLanguageSuccess: (state, action) => {
      state.language = action.payload.language;
    },
  },
});

export const { changeLanguage, changeLanguageSuccess } = languageSlice.actions;

export const selectLanguage = (state) => state;

export default languageSlice.reducer;
