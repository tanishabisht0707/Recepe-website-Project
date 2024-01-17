 import { createSlice } from "@reduxjs/toolkit";
 import { nanoid } from "@reduxjs/toolkit";

 export const initialState = {
    items : []
    
 }
 
 export const RecpeSlice = createSlice({
    name : "Recpes",
    initialState,
    reducers : {
      ShowRecepe : (state,action) => {
         const recepe = {
            id : nanoid(),
            name : action.payload.name,
            categ : action.payload.categ,
            state : action.payload.state,
            instr : action.payload.instr,
            img : action.payload.img,
            scr : action.payload.src,
         }
         state.items.push(recepe)
      },
    }
    
 })

 export const {ShowRecepe} = RecpeSlice.actions 
 export default RecpeSlice.reducer