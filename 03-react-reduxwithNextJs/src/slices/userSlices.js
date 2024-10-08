import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: null,
    },
    reducers: {
        userLoginInfo: (state) => {

            state.value += 1
        }
    },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer