import { createSlice } from "@reduxjs/toolkit";
import { todoDoneToggle } from "../../labs/a7/redux-examples/reducers/todos-reducer";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Daniel Wu",
    "handle": "toucan",
    "image": "hammond.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        changeLikedValue(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            tuit.likes = tuit.liked ? tuit.likes + 1 : tuit.likes - 1
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const { changeLikedValue, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;