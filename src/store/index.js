
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {days:[12000, 0, 0, 0, 0, 0, 0]};
const userState = {username:"username", isOn: false, id: "Workers/-NKDk1f75bM6yDyoVi6O"};

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        update(state, action) {
            state.days[action.payload] = 0;
        },
        updateD(state, action) {
            state.days = action.payload;
        },
        increase(state, action) {
            state.days[action.payload] = state.days[action.payload] + 1; //increase the saved time by 5 minutes 
        },
    }
});

const userSlice = createSlice({
    name:"user",
    initialState: userState,
    reducers: {
        changeName(state, action) {
            state.username = action.payload;
            console.log("Something happend!");
        },
        changeId (state,action) {
            state.id = action.payload;
        },
        changeOn(state,action){
            state.isOn = action.payload;
        },
    }
});



const store = configureStore({
    reducer: {counter: counterSlice.reducer, user: userSlice.reducer}
});

export const userActions = userSlice.actions;
export const counterActions = counterSlice.actions;

export default store;