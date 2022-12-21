
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {days:[12000, 0, 0, 0, 0, 0, 0], isOn:false};

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        update(state, action) {
            state.days[action.payload] = 0;
        },
        increase(state, action) {
            state.days[action.payload] = state.days[action.payload] + 1; //increase the saved time by 5 minutes 
        },
        turnOff(state) {
            state.isOn = false;
        },
        trunOn(state) {
            state.isOn = true;
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;