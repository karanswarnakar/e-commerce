import React from 'react'
import TitelWithLink from '../Custome/TitelWithLink'
import Product from '../Custome/Product';
const products = [
    {
        id: 1,
        name: "Mango Juice",
        category: "Juice",
        image: "cat-1.webp",
        originalPrice: 5.99,
        currentPrice: 4.49,
        inStock: true
    },
    {
        id: 2,
        name: "Yirgacheffe Organic",
        category: "Coffee",
        image: "cat-2.webp",
        originalPrice: 18.00,
        currentPrice: 14.95,
        inStock: true
    },
    {
        id: 3,
        name: "Pumpernickel Bread",
        category: "Bread",
        image: "cat-3.webp",
        originalPrice: 6.50,
        currentPrice: 4.99,
        inStock: true
    },
    {
        id: 4,
        name: "Porcini Mushrooms",
        category: "Mushrooms",
        image: "cat-4.webp",
        originalPrice: 21.95,
        currentPrice: 17.49,
        inStock: true
    },
    {
        id: 5,
        name: "Original Waffles",
        category: "Breakfast Foods",
        image: "cat-5.webp",
        originalPrice: 7.25,
        currentPrice: 5.75,
        inStock: true
    }
];

const obj = {
    title: "Fresh in Today",
    link: "#"
}


const Section2 = () => {
    return (
        <>
            <TitelWithLink data={obj} />
            <div className='product-contaner'>
                <Product />
            </div>
        </>
    )
}

export default Section2
