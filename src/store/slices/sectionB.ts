import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*
export interface CounterState {
  value: number
}
*/
const initialState = {
  value: 0,
}

export const sectionB = createSlice({
  name: 'sectionA',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = sectionB.actions

export default sectionB.reducer