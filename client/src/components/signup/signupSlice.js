import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { signup_req } from '../../../api/Signup_post';


const init_state = {
    loading:false,
    error:null
}

export const postSignup = createAsyncThunk(
    'signup/postSignup',
    async (formData, thunkAPI) => {
        try {
            const result = await signup_req(formData);
            console.log(result.data)
            
            return result.data
        } catch (error) {
            console.error("error at fetchTasks",error)    
        }
      
    }
);


const signup = createSlice({
    name:'signup',
    initialState:{
        ...init_state
    },
    reducers:{

    },
    extraReducers: builder => {
        builder
          .addCase(postSignup.pending, (state, action) => {
            state.loading = true;
            state.error = null; 
          })
          .addCase(postSignup.fulfilled, (state, action) => {

            state.loading = false; 
            state.message = action.payload; 
            
        })


          .addCase(postSignup.rejected, (state, action) => {
            state.loading = false; 
            state.error = action.error.message; 
          });
      },
})

export default signup.reducer