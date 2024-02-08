import { postreq } from './utils'; // Import the postreq function

export const signup_req = async (formData) => {
    const endpoint = "https://todoappserver-zer4.onrender.com/create";
    try {
        const result = await postreq(endpoint, formData); 
        return result;
    } catch (error) {
        console.log("error at signup_req",error.message)
        return error.message 
    }
};


/*export const signup_req = async(formdata) => {
    const endpoint = " http://localhost:5600/create"
    try {
        const result = await postreq(endpoint,formdata)
        return result
    } catch (error) {
        console.error("Error signing up",error)
        
    }
} */