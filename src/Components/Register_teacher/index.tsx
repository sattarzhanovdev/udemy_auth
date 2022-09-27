import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'



const Reg_teacher: React.FC = () => {
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
          />
        </div>
        <div>
          <input 
            type="email"
            placeholder='Адрес электронной почты'
          />
        </div>
        <div>
          <input 
            type="password"
            placeholder='Пароль'
          />
        </div>
        <div className='checking'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </form>
      <div className='accept'>
        <input 
          type="checkbox"
        />
        <p>
          Я хочу оставаться на высоте и получать <br />
          рассылку с полезными советами, <br />
          мотивирующими фактами, специальными <br />
          новостями и промоакциями для <br />
          преподавателей.
        </p>
      </div>
      <button
        type='submit'
      >
        Регистрация
      </button>
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

export default Reg_teacher