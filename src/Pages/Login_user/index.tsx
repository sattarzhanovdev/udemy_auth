import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './style.scss'

const Login_user: React.FC = () => {
  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ error, setError ] = React.useState('')
  const [ checked, setChecked ] = React.useState(false)
  const [ show, setShow ] = React.useState(false)
  
  const BASE_URL = 'http://34.172.10.128/api/v1/account'

  const account: any = {
    name,
    email,
    password
  }

  const handleLogin = () => {
    fetch(`${BASE_URL}/login/`, {
      method:'POST',
      body: JSON.stringify({
        email: account.email ,
        password: account.password ,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setError(res.detail)

      localStorage.setItem('accessToken', res.access)
      localStorage.setItem('refreshToken', res.refresh)
    })  
  }

  return (
    <div className='teacher-register'>
      <div className='up'>
        <h4>Зарегистрируйтесь и начните обучение</h4>
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
        style={checked === false ? {
          opacity: '0.5',
          margin: 0
        }:
        {
          opacity: '1',
          margin: 0
        }}
      >
        Войти
      </button>
      <p>{error}</p>
      <p>
        Выполняя вход, вы соглашаетесь с нашими <span>Условиями <br />
        использования</span> и <span>Политикой конфиденциальности</span>.
      </p>
      <span className='line'></span>
      
      <div className='have_an_acc'>
        <p>Уже есть учетная запись?</p>
        <p>
          <Link
            to={'/auth/login'}
          >
            Вход
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login_user;