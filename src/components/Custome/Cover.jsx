import React from 'react'
import Button from './Button'


const Cover = (props) => {

  return (
    <div className='card-content cover-image'
      style={{
        backgroundImage: `url("${props.img}")`
      }}
    >
      <div className="text-data">
        <div className="tag">
          Hurry! Limited Time Deals Await!
        </div>

        <h1>Nourish Your Body with Nature’s Best Vitamins!</h1>
        <p>Sign Up Now & Save $20 on Your First Order!</p>


        <Button text="Shop Now" />
      </div>
      
      {props.span!=true? " " : <span></span>}
    </div>
  )
}

export default Cover
