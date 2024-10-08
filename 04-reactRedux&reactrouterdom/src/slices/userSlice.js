import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: null,
    },
    reducers: {
        userLoginInfo: (state, action) => {
            state.value = action.payload
            // console.log(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer