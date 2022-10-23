import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'

const Reg_user: React.FC = () => {
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
        <div className='checking'>
          <div className={password.length > 3 ? 'active' : ''}></div>
          <div className={password.length > 6 ? 'active' : ''}></div>
          <div className={password.length > 9 ? 'active' : ''}></div>
          <div className={password.length > 11 ? 'active' : ''}></div>
          <p>{password.length < 3 ? '' : password.length < 6 ? 'Очень ненадёжный' : password.length < 8 ? 'Надёжный пароль' : password.length < 11 || password.length > 11 ? 'Очень надёжный пароль' : ''}</p>
        </div>
      </form>
      <div className='accept'>
        <input 
          type="checkbox"
          onClick={() => setChecked(!checked)}
        />
        <p>
          Отправляйте мне специальные предложения, <br />
          персонализированные рекомендации <br />
          и советы по обучению.
        </p>
      </div>
      <button
        onClick={() => handleRegistration()}
        style={email.length < 3 ? {
          opacity: '0.5'
        }:
        {
          opacity: '1'
        }}
        disabled={email.length > 3 ? false : true}
      >
        Регистрация
      </button>
      <p>{error}</p>
      <p>
        Выполняя вход, вы соглашаетесь с нашими <span>Условиями <br />
        использования</span> и <span>Политикой конфиденциальности</span>.
      </p>
      <span className='line'></span>
      
      <div 
        className='have_an_acc'
        style={{
          width: '100%',
          position: 'relative',
          right: '20px'
        }}
      >
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

export default Reg_user