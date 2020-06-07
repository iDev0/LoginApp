import {createSlice} from "@reduxjs/toolkit";
import api from "./api";
const roomReducer = createSlice({
    name : 'rooms',
    initialState : {
        explore : {
            page : 1,
            rooms : [],
        },
        favs : []
    },
    reducers : {
        setExploreRooms(state, action) {
            state.explore.rooms.push(action.payload.rooms)
            state.explore.page = action.payload.page
        }
    }
})

const { setExploreRooms } = roomReducer.actions

export const getRooms = () => async dispatch => {
    try {

        const {
            data : { results }
        } = await api.rooms()

        dispatch(setExploreRooms({
            rooms : results,
            page : 1
        }))

    } catch (e) {
        console.log(e.message)
    }
}

export  default  roomReducer.reducer