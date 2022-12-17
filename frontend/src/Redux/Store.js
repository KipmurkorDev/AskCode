import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice'
import questionReducer from './Slices/QuestionSlice'
import answerReducer from './Slices/AnswerSlice';
import commentReducer from './Slices/CommentSlice';
import profileReducer from './Slices/userSliceProfile';

const store = configureStore({
      reducer:{
        users:userReducer,
        question:questionReducer,
        answer:answerReducer,
        comment:commentReducer,
        profile:profileReducer
    }

})

export default store;