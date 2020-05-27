import {createSlice} from '@reduxjs/toolkit'
import {exp} from "react-native-reanimated";

const userReducer = createSlice({
    name : 'users',
    initialState : {
        isLoggedIn : false,
        token : null
    },
    reducers : {
        logIn(state, action) {
            state.isLoggedIn = true
            state.token = action.payload.token
        },
        logOut(state, action) {
            state.isLoggedIn = false
            state.token = null
        }
    }
})

export default userReducer