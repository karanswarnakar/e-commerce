import React from 'react'
import Button from './Button';


const GridCard = ({ data, span = false }) => {
  const tagText = data?.subtitle || "Hurry! Limited Time Deals Await!";
  const titleText = data?.title || "Nourish Your Body with Nature's Best Vitamins!";
  const descText = data?.description || "Sign Up Now & Save $20 on Your First Order!";

  return (
    <div className='card-content cover-image'
      style={{
        backgroundImage: data?.img ? `url("${data.img}")` : "none"
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
          {tagText}
        </div>
        <h1>{titleText}</h1>
        <p>{descText}</p>
        {data?.buttonText ? <Button text={data.buttonText} /> : null}
      </div>
      
      {span ? <span></span> : null}
    </div>
  )
}

export default GridCard

