import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter_1',
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
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
type Amount = {
  type: string
  payload: number
}
void function inc(n: number) {
  return n+1
}
export const incrementAsync = (amount: Amount) => (dispatch: (amount: Amount) => void) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 5000)
}