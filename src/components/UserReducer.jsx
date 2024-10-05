import { createSlice, isAction } from "@reduxjs/toolkit";
import { userList } from "./Data";
import Update from "./Update";

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
     addUser: (state, Action) => {
        state.push(Action.payload)
     },
     UpdateUser: (state, Action) =>{
       const {id, name, email} = Action.payload;
       const uu = state.find(user => user.id === id);
       if(uu){
        uu.name = name;
        uu.email = email;
       }
     },
     deleteUser: (state, Action) => {
        const {id} = Action.payload;
        const uu = state.find(user => user.id === id);
        if(uu){
            return state.filter(f => f.id !== id);
        }
     }
    }
})
export const {addUser, UpdateUser, deleteUser} = userSlice.actions
export default userSlice.reducer