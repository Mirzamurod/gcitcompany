import { createSlice } from '@reduxjs/toolkit'

const changeTheme = createSlice({
    name: 'changeTheme',
    initialState: { dark_mode: true },
    reducers: {
        changeMode: state => {
            state.dark_mode = !state.dark_mode
        },
    },
})

export const { changeMode } = changeTheme.actions

export default changeTheme.reducer
