import { createSlice } from '@reduxjs/toolkit'
import { themes } from '@naturacosmeticos/natds-web'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const themeSwapperSlice = createSlice({
  name: 'themeSwapper',
  initialState: {
    theme: cookies.get('my-app/currentTheme'),
    name: 'natura',
    mode: cookies.get('my-app/mode')
  },
  reducers: {
    swapTheme: (state, action) => {
      switch (action.payload) {
        case 'theBodyShop':
          state.theme = themes.theBodyShop[state.mode]
          state.name = 'theBodyShop'
          break
        case 'avon':
          state.theme = themes.avon[state.mode]
          state.name = 'avon'
          break
        case 'natura':
          state.theme = themes.natura[state.mode]
          state.name = 'natura'
          break
        default:
          state.theme = themes.natura[state.mode]
          state.name = 'natura'
      }
    },
    changeMode: (state, action) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      state.theme = themes[state.name][state.mode]
    }

  }
})
export const { swapTheme, changeMode } = themeSwapperSlice.actions
export const themeSwapperReducer = themeSwapperSlice.reducer
