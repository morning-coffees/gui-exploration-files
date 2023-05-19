import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './counter'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer123 from './counter'

export default configureStore({
  reducer: {
    countour: counterReducer123
  }
})