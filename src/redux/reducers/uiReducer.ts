import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  comment: {},
  darkMode: false,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem("DarkTheme", action.payload)
      state.darkMode = action.payload
    },
    getUI: (state, action) => {
      const darkMode =
        localStorage.getItem("DarkTheme") === "true" ? true : false
      state.darkMode = darkMode
    },
    rating: (state, action) => {
      state.comment = action.payload
    },
  },
})

export const { setTheme, getUI, rating } = uiSlice.actions

export default uiSlice.reducer
