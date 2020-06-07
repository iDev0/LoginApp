import { createSlice } from "@reduxjs/toolkit";
import api from "./api";

const userReducer = createSlice({
    name: "users",
    initialState: {
        isLoggedIn: false,
        token: null
    },
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        logOut(state, action) {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const { logIn, logOut } = userReducer.actions;

export const userLogin = form => async dispatch => {
    try {
        const {
            data: { token }
        } = await api.login(form);

        if (token) {
            dispatch(logIn({ token }));
        }
    } catch (e) {
        alert("Wrong user/password");
    }
};

export default userReducer.reducer;