import React from 'react'
import CircleCatagory from './CircleCatagory';
const categories = [
  {
    id: 1,
    title: "Special Offers",
    image: "cat-9.webp",
    color: "#003b22",
    textColor:["#fff", "#f9c82d"],
    isImage: false,
    isSpace:true
  },
  {
    id: 2,
    title: "New In",
    image: "cat-8.webp",
    color: "#f9c82d",
    textColor:"#003b22",
    isImage: false
  },
  {
    id: 3,
    title: "Bakery",
    image: "cat-1.webp",
    isImage: true
  },
  {
    id: 4,
    title: "Vegetables",
    image: "cat-2.webp",
    isImage: true
  },
  {
    id: 5,
    title: "Meat",
    image: "cat-3.webp",
    isImage: true
  },
  {
    id: 6,
    title: "Fish",
    image: "cat-4.webp",
    isImage: true
  },
  {
    id: 7,
    title: "Cheese",
    image: "cat-5.webp",
    isImage: true
  },
  {
    id: 8,
    title: "Drinks",
    image: "cat-6.webp",
    isImage: true
  },
  {
    id: 9,
    title: "Staff Picks",
    image: "cat-7.webp",
    isImage: true
  }
];
const MenuCatagoryCard = () => {
  return (
    <div className='menu-catagory-containar'>
        {categories.map((elm,idx)=>{
          return <CircleCatagory data={elm} key={idx}/>
        })}
    </div>
  )
}

export default MenuCatagoryCard
