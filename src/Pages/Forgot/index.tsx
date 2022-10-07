import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
import {Recaptcha} from 'react-recaptcha/dist'

const Forgot: React.FC = () => {
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

  const Navigate = useNavigate()

  const handleRegistration = () => {
    fetch(`${BASE_URL}/register/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
        password2: account.password,
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setError(res.email[0])
      Navigate('/auth/login')
    })  
    .catch(e => setError(e.message));
  }

  return (
    <div className='teacher-register'>
      <div className='up'>
        <h4>Зарегистрируйтесь и начните обучение</h4>
      </div>
      <form>
        <div>
          <input 
            type="text"
            placeholder='Полное имя'
            onChange={e => setName(e.target.value)}
          />
        </div>
      </form>
      <button
        onClick={() => handleRegistration()}
        style={checked === false ? {
          opacity: '0.5'
        }:
        {
          opacity: '1'
        }}
      >
        Регистрация
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
      <Recaptcha
        sitekey="xxxxxxxxxxxxxxxxxxxx"
        render="explicit"
      />
    </div>
  )
}

export default Forgot