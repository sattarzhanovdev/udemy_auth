import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
import { format_list } from '../../utils'
import './style.scss'

const Questions_teacher = () => {
  const [ format, setFormat ] = React.useState('')

  const account = localStorage.getItem('account')

  const Navigate = useNavigate()

  const handleContinue = () => {
    console.log(account)
    Navigate('/auth/auditorium')
  }

  return (
    <div className='questions'>
      <div className="up">
        <h2>Поделитесь своими знаниями</h2>
        <p>
          Курсы Udemy - это обучение на основе видеоматериалов, которые помогают студентам приобрести <br /> 
          практические навыки. Все зависимости от того, какой опыт преподавания у вас есть, мы поможем вам <br /> 
          организовать ваши материалы в виде онлайн-курса, чтобы студентам было интересно и полезно их <br />
          изучать. 
        </p>
      </div>
      <div className="ask">
        <h3>
          В каком формате вы преподавали раньше?
        </h3>
        <div>
          <form>
            {
              format_list.map(({title, value}, i) => (
                <div
                  key={i}
                >
                  <label
                    onClick={() => {
                      setFormat(value)
                      handleContinue()
                    }}
                  >
                    <input type="radio" name='var' />
                    {title}
                  </label>
                </div>
              ))
            }
          </form>
          <img src="/img/to_teacher_page.png" alt="" />
        </div>
      </div>  
    </div>
  )
}

export default Questions_teacher