import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './style.scss'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { API } from '../../API'

const Login_user: React.FC = () => {
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ error, setError ] = React.useState('')
  const [ show, setShow ] = React.useState(false)
  

  const account: any = {
    email,
    password
  }

  const handleLogin = () => {
    API.login(account)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setError(res.detail ? res.detail : res.email ? res.email : res.password ? res.password : res.detail)

      localStorage.setItem('accessToken', res.access)
      localStorage.setItem('refreshToken', res.refresh)
    })  
  }

  return (
    <div className='teacher-register'>
      <div className='up'>
        <h4>Вход в учетную запись Udemy</h4>
      </div>
      <span 
        className='line'
        style={{
          marginBottom: '15px',
        }}
      ></span>

      <div className='method'>
        <button>
          <BsFacebook /> <span>Войти через Facebook</span>
        </button>
        <button>
          <FcGoogle /> <span>Войти через Google</span>
        </button>
        <button className='apple'>
          <BsApple /> <span>Войти через Google</span>
        </button>
      </div>

      <form>
        <div>
          <input 
            type="email"
            placeholder='Адрес электронной почты'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
            type={show ? "text" : "password"}
            placeholder='Пароль'
            onChange={e => setPassword(e.target.value)}
          />
          <li
            onClick={() => setShow(!show)}
          >
            <AiFillEye />
          </li>
        </div>
      </form>
      <button
        onClick={() => handleLogin()}
        style={{
          margin: 0
        }}
      >
        Войти
      </button>
      <p>{error}</p>
      <div className='have_an_acc'>
        <p>или</p>
        <p>
          <Link
            to={'/auth/forgot'}
          >
            Забыли пароль?
          </Link>
        </p>
      </div>
      <div className='havent_an_acc'>
        <p>Не зарегистрированы?</p>
        <p>
          <Link
            to={'/auth/register'}
          >
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login_user;