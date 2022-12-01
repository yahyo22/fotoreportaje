import {Routes,Route,Navigate} from "react-router-dom"

// Components

export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin'element={<AdminsDesktop />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
