// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'reducers/counterSlice'

const Store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default Store