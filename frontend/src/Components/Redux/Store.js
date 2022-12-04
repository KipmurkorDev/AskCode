import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice'
import questionReducer from './Slices/QuestionSlice'



const store = configureStore({
      reducer:{
        users:userReducer,
        question:questionReducer
    }

})

export default store;