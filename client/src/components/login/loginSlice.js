import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { login_req } from '../../../api/Login_post';


const init_state = {
    loading:false,
    error:null,
    message:null
}

export const postLogin = createAsyncThunk(
    'login/postLogin',
    async (formData, thunkAPI) => {
        try {
            const result = await login_req(formData);
            return result.data
        } catch (error) {
            console.error("error at Postlogin",error)
            return error  
        }
      
    }
);


const login = createSlice({
    name:'login',
    initialState:{
        ...init_state
    },
    reducers:{

    },
    extraReducers: builder => {
        builder
          .addCase(postLogin.pending, (state, action) => {
            state.loading = true;
            state.error = null; 
          })
          .addCase(postLogin.fulfilled, (state, action) => {

            state.loading = false; 
            state.message = action.payload; 
            
        })
          .addCase(postLogin.rejected, (state, action) => {
            state.loading = false; 
            state.error = action.error; 
            console.log("Error message at Login",state.error)
          });
      },
})

export default login.reducer