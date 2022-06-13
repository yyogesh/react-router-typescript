import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            <NavLink to="/" style={navLinkStyles}>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
    )
}

export default NavBar