import React from 'react'

const Product = () => {
    return (
        <div className='product'>
            <div className="product-image"></div>
            <div className="tag">Juice</div>
            <div className="product-name">Mango Juice</div>

            <div className="bottom">
                <div className="price">
                    <span className="original-price">$42.15</span>
                    <span className='old-price'>$55.25</span>
                </div>
            </div>
        </div>
    )
}

export default Product
