import React from 'react'
import Button from './Button';
const GridCard = ({data}) => {
  return (
    <div className='card-content cover-image'
      style={{
        backgroundImage: `url("${data.img}")`,
        backgroundPosition: `center`,
        borderImageRepeat: `no-repeat`
      }}
    >
        {/*   id: 1,
            title: "On Fruits & Vegetables",
            subtitle: "Unlock Up To",
            description: "Fuel your day with the purest from nature.",
            buttonText: "Shop Now",
            discount: null */}
      <div className="text-data">
        <div className="tag">
          Hurry! Limited Time Deals Await!
        </div>

        <h1>Nourish Your Body with Nature’s Best Vitamins!</h1>
        <p>Sign Up Now & Save $20 on Your First Order!</p>


        <Button text="Shop Now" />
      </div>
      
      {data.span!=true? " " : <span></span>}
    </div>
  )
}

export default GridCard
