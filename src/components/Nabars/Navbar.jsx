import React from 'react'

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className='nav-bar-container'>
        <div className="logo">
          <h1>ShopEase</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for food..." />
          <button>
            <i className="fa-light fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="btn-contener">
          <button className="btn">
            <i class="fa-light fa-user"></i>
          </button>
          <button className="btn">
            <i class="fa-light fa-bag-shopping"></i>
          </button>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Drinks</li>
          <li>Best Sellers</li>
          <li>Pages</li>
          <li>Gift</li>
          <li>Sale</li>
          <li>Contact</li>
        </ul>

        <div className="tags">
          <div className="tag">
            <i class="fa-light fa-bolt"></i>
            <span> Fresh & In Season</span>
          </div>
          <div className="tag">
            <i className="fa-light fa-badge-percent"></i>
            <span>Sale! 30% OFF!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
