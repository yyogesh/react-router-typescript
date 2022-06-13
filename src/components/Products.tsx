import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder='Search Product' />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default Products

// Ctrl + Shift + L

// users/2