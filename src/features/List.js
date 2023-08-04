import {createSlice} from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name:"list",
    initialState:[],
    reducers : {
          dataList:(state,action) => {
           state.push(action.payload);
             },

            filterData:(state,action) => {
               return   state.filter((user) => user.id !== action.payload)
            }

    }
})

export const {dataList,filterData} = listSlice.actions

export default listSlice.reducer