import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults:(state, action) =>{
            // console.log("current data in search redux store", Object.assign(state, action.payload))
            // console.log("first test", action)
            state =Object.assign(state, action.payload);
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;