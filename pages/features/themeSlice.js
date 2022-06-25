import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: "#ffffff",
  secondaryColor:"rgb(62, 62, 255)"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTextColor: (state, action) => {
      state.color= action.payload.color;
      state.secondaryColor=action.payload.secondaryColor;
    },
  },
})

export const { changeTextColor } = themeSlice.actions

export default themeSlice.reducer