import React from 'react'
import TitelWithLink from '../Custome/TitelWithLink'
import Product from '../Custome/Product';
const products = [
  {
    id: 1,
    name: "Mango Juice",
    category: "Juice",
    image: "mango-juice-600x600.webp",
    originalPriceUSD: 5.99,
    priceUSD: 4.49,
    originalPriceINR: 497,
    priceINR: 373
  },
  {
    id: 2,
    name: "Yirgacheffe Organic",
    category: "Coffee",
    image: "yirgacheffe-organic-600x600.webp",
    originalPriceUSD: 18.00,
    priceUSD: 14.95,
    originalPriceINR: 1494,
    priceINR: 1241
  },
  {
    id: 3,
    name: "Pumpernickel Bread",
    category: "Bread",
    image: "pumpernickel-bread-600x600.webp",
    originalPriceUSD: 6.50,
    priceUSD: 4.99,
    originalPriceINR: 540,
    priceINR: 414
  },
  {
    id: 4,
    name: "Porcini Mushrooms",
    category: "Mushrooms",
    image: "porcini-mushrooms-600x600.webp",
    originalPriceUSD: 21.95,
    priceUSD: 17.49,
    originalPriceINR: 1822,
    priceINR: 1452
  },
  {
    id: 5,
    name: "Original Waffles",
    category: "Breakfast Foods",
    image: "original-waffles-600x600.webp",
    originalPriceUSD: 7.25,
    priceUSD: 5.75,
    originalPriceINR: 602,
    priceINR: 477
  }
]

const Section2 = () => {
    return (
        <>
            <TitelWithLink title="Fresh in Today" link="#"/>
            <div className='product-contaner'>
                {products.map((elm, idx)=>{
                    return <Product data={elm} key={idx}/>
                })}
            </div>
        </>
    )
}

export default Section2
