import React from 'react'

const Product = ({data}) => {
    return (
        <div className='product'>
            <div className="product-image"
                style={{
                    backgroundImage:`url('../public/image/${data.image}')`,
                }} 
            ></div>
            <div className="tag">{data.category}</div>
            <div className="product-name">{data.name}</div>

            <div className="bottom">
                <div className="price">
                    <span className="original-price">{data.priceINR}</span>
                   <s> <span className='old-price'>{data.originalPriceINR}</span></s>
                  
                </div>
                <button className="btn-cart  add-to-cart">
                    Add to cart
                </button>
            </div>
      
        </div>
    )
}

export default Product
