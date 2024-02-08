import { getreq } from "./utils"
export const getTasks = async(id) => {
    const endpoint =` https://todoappserver-zer4.onrender.com/auth/${id}`;
    try {
        const result = await getreq(endpoint); 
        return result;
    } catch (error) {
        console.log("error at getreq")
        return error 
    }
}
