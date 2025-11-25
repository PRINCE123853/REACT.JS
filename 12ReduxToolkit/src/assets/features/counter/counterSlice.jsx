import { createSlice } from '@reduxjs/toolkit'


//slice creation
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  //reducer
  reducers: {

    increment: state => {
     
      state.value += 1
    },
     reset: state => {
     
      state.value =0
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer