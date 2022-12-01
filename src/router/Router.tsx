import {Routes,Route,Navigate} from "react-router-dom"
<<<<<<< HEAD
import Register from "../pages/auth/register/Register"
=======
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
>>>>>>> 556e7694c87007ee03d9f7b83d831f61e95b3c8b

// Components

export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register'element={<Register/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
