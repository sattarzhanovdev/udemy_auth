import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../../API'
import './style.scss'

const Forgot = () => {
  const [ email, setEmail ] = React.useState('')
  const [ error, setError ] = React.useState('')
  
  const account = {
    email,
  }

  const Navigate = useNavigate()

  const handleRegistration = () => {
    API.forgot_password(account)
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
        <h4>Забыли пароль?</h4>
      </div>
      <form>
        <div>
          <input 
            type="text"
            placeholder='Введите ваш email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </form>
      <button
        onClick={() => handleRegistration()}
        style={
          email.length > 3 ? {
            margin: 0,
            opacity: 1
          }
          :
          {
            margin: 0,
            opacity: 0.5
          }
        }
        disabled={email.length > 3 ? false : true}
      >
        Сбросить пароль
      </button>
      <p>{error}</p>
      <span className='line'></span>
      
      <div className='have_an_acc'>
        <p>или</p>
        <p>
          <Link
            to={'/auth/login'}
          >
            выполните вход
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Forgot