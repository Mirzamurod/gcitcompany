import { configureStore } from '@reduxjs/toolkit'
import { changeTheme } from '.'

export default configureStore({ reducer: { changeTheme } })
