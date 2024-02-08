import {  putreq } from "./utils"
export const deleteTask = async(id,tid) => {
    const endpoint =` https://todoappserver-zer4.onrender.com/auth/${id}/${tid}`;
    try {
        console.log(endpoint)
        const result = await putreq(endpoint); 
        return result;
    } catch (error) {
        console.log("error at getreq")
        return error 
    }
}
