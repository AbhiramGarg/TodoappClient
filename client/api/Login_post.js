import { postreq } from "./utils"
export const login_req = async(formData) => {
    const endpoint = "https://todoappserver-zer4.onrender.com/auth";
    try {
        const result = await postreq(endpoint,formData); 
        return result;
    } catch (error) {
        console.log("error at Login_req",error)
        return error 
    }
}
