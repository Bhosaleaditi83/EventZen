import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    allCategory : [],
    loadingCategory : false,
    allSubCategory : [],
    event : []
}

const productSlice = createSlice({
    name : 'event',
    initialState : initialValue,
    reducers : {
        setAllCategory : (state,action)=>{
            state.allCategory = [...action.payload]
        },
        setLoadingCategory : (state,action)=>{
            state.loadingCategory = action.payload
        },
        setAllSubCategory : (state,action)=>{
            state.allSubCategory = [...action.payload]
        },
        
    }
})

export const  { setAllCategory,setAllSubCategory,setLoadingCategory } = productSlice.actions

export default productSlice.reducer