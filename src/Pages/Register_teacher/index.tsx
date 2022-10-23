import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import './style.scss'
import { API } from '../../API'

const Reg_teacher: React.FC = () => {
  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ error, setError ] = React.useState('')
  const [ checked, setChecked ] = React.useState(false)
  const [ show, setShow ] = React.useState(false)

  
  const account: any = {
    name,
    email,
    password
  }
  
  const Navigate = useNavigate()

  const handleRegistrationMentor = () => {
    localStorage.setItem('account', JSON.stringify(account))

    Navigate('/auth/question_teacher')
  }

  return (
    <div className='teacher-register'>
      <div className='up'>
        <h4>Стать преподавателем Udemy</h4>
        <p>
          Откройте для себя дружное сообщество онлайн- <br />
          преподавателей. Получите немедленный доступ ко <br />
          всем ресурсам для создания курсов.
        </p>
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
        style={checked === false ? {
          opacity: '0.5'
        }:
        {
          opacity: '1'
        }}
        onClick={() => {
          handleRegistrationMentor()
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
      
      <div 
        className='have_an_acc'
        style={{
          width: '100%',
          position: 'relative',
          right: '30px'
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

export default Reg_teacher