import '../styles.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postLogin } from './loginSlice'
import { useDispatch,useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const message = useSelector((state) => state.home.message)
    const error = useSelector((state) => state.home.error)
    const [formData,setFormdata] = useState({
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
            const result = await dispatch(postLogin(formData))
            navigate('/')
        } catch (error) {
            console.error("Error in making the login_req in login.jsx",error)
            
        }
    }
  return (
    <div className='page'>
        <div className='form_container'>
            {message&&<div>{message}</div>}
            {error&&<div>{error}</div>}
            <form>
                <div className='sub_box'>
                    <label >email</label>
                    <input onChange={handleChange} name='email'  value={formData.email} type="text" />
                </div>
                <div className='sub_box'>
                    <label >Password</label>
                    <input onChange={handleChange} name='password'  value={formData.password} type="password" />
                </div>
                <button onClick={handleSubmit} className='btn'>Login</button>
                <span>dont have an account?<a style={{textDecoration:'none',color:'green'}} href="/signup">Signup</a></span>
            </form>
        </div>
    </div>
  )
}

export default Login