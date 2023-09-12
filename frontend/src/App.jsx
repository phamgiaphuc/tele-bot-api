import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './pages/Member'
import UserInfo from './pages/MemberInfo'
import EditUser from './pages/EditMember'
import DeleteUser from './pages/DeleteMember'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/api/v1/member' element={<User/>}></Route>
        <Route path='/api/v1/member/:id' element={<UserInfo/>}></Route>
        <Route path='/api/v1/member/edit/:id' element={<EditUser/>}></Route>
        <Route path='/api/v1/member/delete/:id' element={<DeleteUser/>}></Route>
      </Routes>
    </div>
  )
}

export default App