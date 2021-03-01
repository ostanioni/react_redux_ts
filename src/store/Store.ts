// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'reducers/counterSlice'
import counterReducer_2 from 'reducers/counterSlice_2'


const Store = configureStore({
  reducer: {
    counter: counterReducer,
    counter_2: counterReducer_2,
  }
})

export default Store