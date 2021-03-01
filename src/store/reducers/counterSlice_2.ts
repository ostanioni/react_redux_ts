import { createSlice } from '@reduxjs/toolkit'
export const counterSlice_2 = createSlice({
  name: 'counter_2',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
export const { increment, decrement, incrementByAmount } = counterSlice_2.actions
export default counterSlice_2.reducer
type Amount = {
  type: string
  payload: number
}

export const incrementAsync = (amount: Amount) => (dispatch: (amount: Amount) => void) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 5000)
}