import {Routes,Route,Navigate} from "react-router-dom"
import Register from "../pages/auth/register/Register"
import Login from "../pages/login/Login"

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
