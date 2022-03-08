import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getSlideRequest, postSlideRequest } from "../../Components/Slides/services/SlidesApiService";

export const getSlide = createAsyncThunk(
    "slide/getSlide" , 
    async (data) => {
        return await getSlideRequest(data)
    }
)



export const newSlide = createAsyncThunk(
    "slide/newSlide" , 
    async (data) => {
        return await postSlideRequest(data)
    }
)

const slidesSlice = createSlice({
    name: "slide",
    initialState:{
        slides:[],
        status: null,
        error: null,
    },
    extraReducers: {

         [getSlide.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [getSlide.fulfilled]: (state,action) => {
                 state.status = 'success'
                 state.slides = action.payload
        },
        [getSlide.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },


        [newSlide.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [newSlide.fulfilled]: (state,action) => {
                 state.status = 'success'
                 state.slides = state.slides.concat(action.payload)  
        },
        [newSlide.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },

    }

})


export default slidesSlice.reducer;