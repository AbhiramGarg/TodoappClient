import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTasks} from '../../../api/getTasks';
import { postSignup } from '../signup/signupSlice';
import { addTask } from '../../../api/addTask';
import { postLogin } from '../login/loginSlice';
import { deleteTask } from '../../../api/deleteTask';
import { updateTask } from '../../../api/updateTask';
const init_state = {
    fn:null,
    loading:false,
    id:null,
    addTask:null,
    tasks: [],
    loggedin:null
};

export const fetchTasks = createAsyncThunk(
    'home/fetchUserTasks',
    async (userId, thunkAPI) => {
        try {
            const result = await getTasks(userId);
            return result.data.tasks;
        } catch (error) {
            console.error("error at fetchTasks",error)    
        }
      
    }
);
export const addTasks = createAsyncThunk(
    'home/addTasks',
    async ({uid,task},thunkAPI) => {
        try {
            const result = await addTask(uid,task);
            return result.data.tasks;
        } catch (error) {
            console.error("error at adding tasks",error)    
        }
      
    }
);
export const deleteTasks= createAsyncThunk(
    'home/deleteTasks',
    async ({uid,tid},thunkAPI) => {
        try {
            const result = await deleteTask(uid,tid);
            return result.data.tasks;
        } catch (error) {
            console.error("error at adding tasks",error)    
        }
      
    }
);
export const updateTasks= createAsyncThunk(
    'home/updateTasks',
    async ({uid,tid,utask},thunkAPI) => {
        try {
            const result = await updateTask(uid,tid,utask);
            return result.data.tasks;
        } catch (error) {
            console.error("error at adding tasks",error)    
        }
      
    }
);
const home = createSlice({
    name: 'home',
    initialState: {
        ...init_state
    },
    reducers: {
        // add: (state, action) => {
        //     state.addTask = action.payload;
        // },
        // remove: (state, action) => {
        //     state.tasks = state.tasks.filter((task, idx) => idx !== action.payload);
        // },
        setLoggedin:(state,action) => {
            state.id = action.payload
            console.log(state.id)    
        },
        // update:(state,action) => {
        //     const id = action.payload.id
        //     const task = action.payload.updatedTask
        //     console.log(id)
        //     console.log(task)
        //     if (state.tasks && state.tasks[id] !== undefined) {
        //         // Directly modify the tasks array by index
        //         state.tasks[id] = task;
        //     } else {
        //         console.error("Invalid task id or 'tasks' array is not defined");
        //     }
            
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;

            })
            .addCase(postSignup.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.fn = action.payload.fn;

            })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.fn = action.payload.fn;

            })
        builder.addCase(addTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;

            });
        builder.addCase(deleteTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;

            });
        builder.addCase(updateTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;

            });
    },
    

});

export const { add, remove,setLoggedin,update} = home.actions;

export default home.reducer;
