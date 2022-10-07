import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Auth_pages } from './Pages'
import axios from 'axios'

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
      </Routes>
    </div>
  )
}

export default App