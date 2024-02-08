import axios from 'axios'
export const postreq = async (endpoint,formdata) => {
    try {
        const response = await axios.post(`${endpoint}`,formdata)
        return response
    } catch (error) {
        console.log("error at post_req",error.response.data.message)
        return error.response.data.message
          
    }
}
export const postupreq = async (endpoint,utask) => {
    try {
        let config = {}
        if(utask){
            config = {utask}
        }

        const response = await axios.post(`${endpoint}`,config)
        return response
    } catch (error) {
        console.log("error at post_req",error.data.message)
        return error
          
    }
}

export const getreq = async (endpoint) => {
    try {
        const response = await axios.get(`${endpoint}`)
        return response
    } catch (error) {
        console.error('Error making post request')
          
    }
}
export const putreq = async(endpoint,data) => {
    try{

        let config = {}
        if(data){
            config = {data}
        }
        const response = await axios.put(`${endpoint}`,config)
        return response
    } catch (error) {
        console.log('Error making put request')
    }
}