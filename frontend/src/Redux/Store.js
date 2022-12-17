import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice'
import questionReducer from './Slices/QuestionSlice'
import answerReducer from './Slices/AnswerSlice';
import commentReducer from './Slices/CommentSlice';
import userReducer from './Slices/userSlice';

const store = configureStore({
      reducer:{
        auth:authReducer,
        question:questionReducer,
        answer:answerReducer,
        comment:commentReducer,
        user:userReducer
    }

})

export default store;