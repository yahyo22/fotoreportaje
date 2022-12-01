import {Routes,Route,Navigate} from "react-router-dom"
import Register from "../pages/auth/register/Register"

// Components

export default function Router() {
  return (
    <Routes>
      <Route path='/login' />
      <Route path='/register'element={<Register/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
