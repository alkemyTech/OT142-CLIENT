import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { deleteSlides, editSlides, getSlides, postSlides } from "../../Services/slidesService";

export const getSlidesSlice = createAsyncThunk(
    "slide/getSlide" , 
    async (data) => {
        return await getSlides(data)
    }
)
export const newSlideSlice = createAsyncThunk(
    "slide/newSlide" , 
    async (data) => {
        return await postSlides(data)
    }
)

export const putSlideSlice = createAsyncThunk(
    "slide/putSlide" , 
    async (data) => {
        return await editSlides(data, data.id)
    }
)

export const removeSlideSlice = createAsyncThunk("slide/deleteSlide", async (id) => {
  await deleteSlides(id);
  return id;
});

const slidesSlice = createSlice({
    name: "slide",
    initialState:{
        slides:[],
        status: null,
        error: null,
    },
    extraReducers: {

         [getSlidesSlice.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [getSlidesSlice.fulfilled]: (state,action) => {
                 state.status = 'success'
                 state.slides = action.payload.data
        },
        [getSlidesSlice.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },


        [newSlideSlice.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [newSlideSlice.fulfilled]: (state,action) => {
                 state.status = 'success'
                 state.slides = state.slides.concat(action.payload)  
        },
        [newSlideSlice.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },


        [putSlideSlice.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [putSlideSlice.fulfilled]: (state,action) => {
                 state.status = 'success'
                 state.slides = {}  
        },
        [putSlideSlice.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },


         [removeSlideSlice.pending]: (state) => {
                 state.status = 'loading'                       
        },
        [removeSlideSlice.fulfilled]: (state,{payload}) => {
                 state.status = 'success'
                 state.slides = state.slides.filter(({ id }) => id !== payload); 
        },
        [removeSlideSlice.rejected]: (state,action) => {
                state.status = 'failed'
                state.error = action.error
        },     

    }

})


export default slidesSlice.reducer;