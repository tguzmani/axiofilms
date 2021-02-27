import React from 'react'

import { BsCamera } from 'react-icons/bs'
import Button from './../layout/Button'

import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

const Testimonial = ({ picture, children, person }) => (
  <div className='testimonial'>
    <div className='testimonial-picture'>
      <BsCamera size='1.5em' />
    </div>
    <div className='testimonial-person'>{person}</div>
    <div className='testimonial-text'>{children}</div>
  </div>
)

const Testimonials = () => {
  const testimonials = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, qui voluptates fuga a sed vitae, inventore eveniet non, deleniti nemo quod blanditiis facilis aliquid quo tempore. Adipisci, autem! Omnis, modi.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quidem repellendus sunt quibusdam autem, iste odio dolorum nostrum iure optio nobis sapiente alias voluptates, aliquam vel, dignissimos exercitationem architecto neque.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ad distinctio est tempora inventore earum iure veritatis rerum! Blanditiis animi neque eveniet quas inventore dolores doloribus nesciunt explicabo eaque harum?',
  ]

  const [currentTestimonial, setCurrentTestimonial] = React.useState(
    testimonials[0]
  )

  const next = () => {
    const currentTestimonialIndex = testimonials.indexOf(currentTestimonial)
    if (currentTestimonialIndex === testimonials.length - 1)
      setCurrentTestimonial(testimonials[0])
    else setCurrentTestimonial(testimonials[currentTestimonialIndex + 1])

    console.log(currentTestimonial)
  }

  const previous = () => {
    const currentTestimonialIndex = testimonials.indexOf(currentTestimonial)
    if (currentTestimonialIndex === 0)
      setCurrentTestimonial(testimonials[testimonials.length - 1])
    else setCurrentTestimonial(testimonials[currentTestimonialIndex - 1])
  }

  return (
    <div id='testimonials' className='container'>
      <h1>Nuestros clientes</h1>
      <div id='testimonial-carousel'>
        <div className='testimonial-carousel-btn'>
          <BsCaretLeftFill onClick={previous} size='1em' />
        </div>

        <Testimonial person='John Doe'>{currentTestimonial}</Testimonial>

        <div className='testimonial-carousel-btn'>
          <BsCaretRightFill onClick={next} size='1em' />
        </div>
      </div>

      <div className='center'>
        <Button variant='primary'>Cotiza tu proyecto</Button>
      </div>
    </div>
  )
}

export default Testimonials
