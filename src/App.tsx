import { Route, Routes } from 'react-router-dom'
import { Auth_pages } from './Pages'
import './App.scss'
import axios from "axios";

axios.defaults.baseURL = 'http://34.172.10.128/api/v1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Auth_pages.Pages.Reg_user />}/> 
        <Route path='/' element={<Auth_pages.Pages.Reg_user />}/> 
        <Route path='/auth/register_teacher' element={<Auth_pages.Pages.Reg_teacher />}/> 
        <Route path='/auth/register_user' element={<Auth_pages.Pages.Reg_user />}/> 
        <Route path='/auth/question_teacher' element={<Auth_pages.Pages.Questions_teacher />}/> 
        <Route path='/auth/login' element={<Auth_pages.Pages.Login_user />}/> 
        <Route path='/auth/forgot' element={<Auth_pages.Pages.Forgot />}/> 
      </Routes>
    </div>
  )
}

export default App