import React from 'react'
import Icons from '../Custome/IconComponent'
const TopNavbar = () => {
    return (
        <div className='top-nav'>
            <p><i class="fa-sharp fa-light fa-phone"></i>Call Us: +1-800-123-456</p>

            <p>Get Free Delivery on Orders Over $100 <b>–Shop Now!</b></p>

            <div className='icons'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>

        </div >)
}

export default TopNavbar
