import React from 'react'

import { MdAssignmentTurnedIn } from 'react-icons/md'
import Button from './../layout/Button'

const Step = ({ number, icon, children }) => (
  <>
    <div className='step'>
      <div className='step-number'>{number}</div>
      <div className='step-circle'>
        <div className='step-icon'>{icon}</div>
      </div>
      <div className='step-text'>{children}</div>
    </div>
  </>
)

const BuyingProcess = () => {
  const size = '2.5em'

  return (
    <div id='buying-process' className='bg-dark'>
      <div className='container'>
        <h1>Proceso</h1>
        <div id='steps'>
          <Step number='01' icon={<MdAssignmentTurnedIn size={size} />}>
            Lorem ipsum dolor sit amet.
          </Step>
          <Step number='02' icon={<MdAssignmentTurnedIn size={size} />}>
            Lorem ipsum dolor sit amet.
          </Step>
          <Step number='03' icon={<MdAssignmentTurnedIn size={size} />}>
            Lorem ipsum dolor sit amet.
          </Step>
        </div>
        <div className='step-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatem vel quos. Inventore minima voluptas alias accusantium, ea
          optio tenetur, cupiditate ducimus ab facere distinctio?
        </div>

        <div className='center'>
          <Button variant='secondary'>Cotiza tu proyecto</Button>
        </div>
      </div>
    </div>
  )
}

export default BuyingProcess
