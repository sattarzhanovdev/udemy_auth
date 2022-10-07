import React from 'react'
import './style.scss'

const Questions_teacher = () => {
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
            <div>
              <label><input type="radio" name='var' /> Лично, частным образом</label>
            </div>
            <div>
              <label><input type="radio" name='var' /> Лично, профессионально</label>
            </div>
            <div> 
              <label><input type="radio" name='var' /> Онлайн</label>
            </div>
            <div>
              <label><input type="radio" name='var' /> Другое</label>
            </div>
          </form>
          <img src="/img/to_teacher_page.png" alt="" />
        </div>
      </div>  
    </div>
  )
}

export default Questions_teacher