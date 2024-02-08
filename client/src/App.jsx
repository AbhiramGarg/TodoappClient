import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { Login,Signup,Home } from './components'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  
  const user = useSelector((state) => state.home.id)
  useEffect(() => {
    
  },[user])


    // localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/' element={<Navigate replace to='/login' />} />
        )}
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/login' exact element={<Login/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App