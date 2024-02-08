
import { useState } from 'react'  
import { useNavigate } from 'react-router-dom'
import '../styles.css'
import {  useDispatch } from 'react-redux'
import { postSignup } from './signupSlice'
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error,setError] = useState(null)

    const [formData,setFormdata] = useState({
        Firstname:"",
        Lastname:"",
        email:"",
        password:"",
        
    })
    const handleChange = (e) => {
        setFormdata({
            ...formData,
        [e.target.name]:e.target.value
        
    })


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("1")
        try {
            const result = await dispatch(postSignup(formData))
            console.log("Here is the result",result.payload)
            setError(result.payload)
            navigate('/')
        } catch (error ) {
            console.error("Error in making the signup_req",error)
            
        }
    }
    
  return (
    <div className='page'>
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                {error&& <div style={{color:'red'}}>{error}</div>}
                <div className='sub_box'>
                    <label >First Name</label>
                    <input onChange={handleChange} name='Firstname'  value={formData.Firstname} type="text" />
                </div>
                <div className='sub_box' >
                    <label >Last Name</label>
                    <input onChange={handleChange} name='Lastname'  value={formData.Lastname} type="text" />
                </div>
                <div className='sub_box'>
                    <label >email</label>
                    <input onChange={handleChange} name='email'  value={formData.email} type="text" />
                </div>
                <div className='sub_box'>
                    <label >Password</label>
                    <input onChange={handleChange} name='password'  value={formData.password} type="password" />
                </div>
                <button type='submit' className='btn'>Signup</button>
                <span>Existing user?<a style={{textDecoration:'none',color:'green'}} href="/">Login</a></span>
            </form>
        </div>
    </div>
  )
}

export default Signup
