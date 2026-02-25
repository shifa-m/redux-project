import { createSlice } from "@reduxjs/toolkit";


const initialState={
            items:JSON.parse(localStorage.getItem('collection'))||[]
}
const collectionSlice = createSlice({
            name:'collection',
            initialState,
            reducers:{
                        addCollection:(state,action)=>{
                                    state.items.push(action.payloas);
                                    localStorage.setItem('collection',JSON.stringify(state.items))

                        },
                        removeCollection:(state,action)=>{
                                    
                        },
                        clearCollection:(state,action)=>{

                        }
            }

})