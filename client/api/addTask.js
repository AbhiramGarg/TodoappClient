import {  putreq } from "./utils"
export const addTask = async(id,task) => {
    const endpoint =` https://todoappserver-zer4.onrender.com/auth/${id}`;
    try {
        console.log(endpoint)
        console.log("This is the AddTask api",task)
        const result = await putreq(endpoint,task); 
        console.log("result at getreq",result.data)
        return result;
    } catch (error) {
        console.log("error at getreq")
        return error 
    }
}
