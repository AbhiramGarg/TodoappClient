import {configureStore} from '@reduxjs/toolkit'
import homeReducer from '../components/home/homeSlice';
import signupReducer from '../components/signup/signupSlice'
import loginReducer from '../components/login/loginSlice'
// Use homeReducer, add, and remove in your Redux setup

const store = configureStore({
    reducer:{
        home:homeReducer,
        signup:signupReducer,
        login:loginReducer
    }

})
export default store