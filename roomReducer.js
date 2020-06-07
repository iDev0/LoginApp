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

            const { explore } = state
            const { payload } = action

            payload.rooms.forEach(payloadRoom => {

                const exists = explore.rooms.find(
                    savedRoom => savedRoom.id === payloadRoom.id
                )

                if (!exists) {
                    explore.rooms.push(payloadRoom)
                }

            })

            state.explore.page = payload.page
        }
    }
})

const { setExploreRooms } = roomReducer.actions

export const getRooms = () => async dispatch => {
    try {

        const {
            data
        } = await api.rooms()
        console.log(data)


        // console.log(await api.rooms())

        dispatch(setExploreRooms({
            rooms : data,
            page : 1
        }))

    } catch (e) {
        console.log("err : ", e.message)
    }
}

export  default  roomReducer.reducer