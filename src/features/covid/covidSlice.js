import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import covidService from './covidService'

const initialState = {
    covid: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


//Get Covid Data
export const covidGet = createAsyncThunk('covid/getAll', async (_, thunkAPI) => {
    try{
    
        return await covidService.covidGet()
    }
     catch(error) {
     const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
    
    }})

    //Get Covid Data
export const covidHistory = createAsyncThunk('covid/getHistory', async (_, thunkAPI) => {
    try{
    
        return await covidService.covidHistory()
    }
     catch(error) {
     const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
    
    }})



    export const covidSlice = createSlice({
        name: 'covid',
        initialState,
        reducers : {
            reset: (state) => initialState
        },
        extraReducers: (builder) => {
            builder
            .addCase(covidGet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(covidGet.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.covid = action.payload
            })
            .addCase(covidGet.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.covid = action.payload
            })
            .addCase(covidHistory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(covidHistory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.covid = action.payload
            })
            .addCase(covidHistory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.covid = action.payload
            })

        }
    })



    export const {reset} = covidSlice.actions
export default covidSlice.reducer