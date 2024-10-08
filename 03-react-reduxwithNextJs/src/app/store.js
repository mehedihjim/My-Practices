import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlices'
import todoSlice from '../slices/todoSlice'

export default configureStore({
    reducer: {
        users: userSlice,
        todos: todoSlice,
    },
})