import GridCard from "../Custome/GridCard";

const Section3 = () => {
    const banners = [
        {
            id: 1,
            title: "On Fruits & Vegetables",
            subtitle: "Unlock Up To",
            description: "Fuel your day with the purest from nature.",
            buttonText: "Shop Now",
            discount: null,
            img: "/image/banner-1.webp"
        },
        {
            id: 2,
            title: "On Bakery Products",
            subtitle: "Claim Up To",
            description: "Fuel your day with the purest from nature.",
            buttonText: "Shop Now",
            discount: null,
            img: "/image/banner-2.webp"
        },
        {
            id: 3,
            title: "Weekly Highlight",
            subtitle: "Nourish Boldly, Spend Wisely!",
            description: "Weekend Only",
            buttonText: null,
            img: "/image/banner-3.webp",
            discount: "30%"
        },
        {
            id: 4,
            title: "Just Arrived",
            subtitle: "Fresh from Nature's Farm",
            description: "Just",
            price: "$29.00",
            buttonText: null,
            img: "/image/banner-4.webp"
        },
        {
            id: 5,
            title: "Seasonal Special",
            subtitle: "Tastes Like Fresh, Feels Like a Deal!",
            description: "Enjoy an extra 25% off",
            buttonText: null,
            img: "/image/banner-5.webp",
            discount: "25%"
        }
    ];


    return (
        <div className='grid-card-content'>
            {banners.map((elm,idx)=>{
                return <GridCard span={false} data={elm} key={idx}/>
            })}
        </div>
    )
}

export default Section3

