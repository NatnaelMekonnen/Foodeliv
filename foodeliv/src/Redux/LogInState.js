import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userState: {},
}

export const LoginState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLog: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLog } = LoginState.actions

export default LoginState.reducer