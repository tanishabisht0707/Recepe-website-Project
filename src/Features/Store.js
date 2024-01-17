 import { configureStore } from "@reduxjs/toolkit";
 import reducers from './RecpeSlice'

 export const Store = configureStore({
    reducer : reducers
 })
