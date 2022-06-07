
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer
  }
}, [thunk])