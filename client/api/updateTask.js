import {  postupreq } from "./utils"
export const updateTask = async(id,tid,utask) => {
    const endpoint =` https://todoappserver-zer4.onrender.com/auth/${id}/${tid}`;
    try {
        console.log(endpoint)
        const result = await postupreq(endpoint,utask); 
        return result;
    } catch (error) {
        console.log("error at getreq")
        return error 
    }
}
