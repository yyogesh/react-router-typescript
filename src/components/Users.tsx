import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
    return (
        <div>
            <h2>
                <Link to="/users/1">User 1</Link>
            </h2>
            <h2>
                <Link to="/users/1">User 2</Link>
            </h2>
            <h2>
                <Link to="/users/1">User 3</Link>
            </h2>
            <h2>
                <Link to="/users/admin">Admin</Link>
            </h2>
            <hr />
            <Outlet />
        </div>
    )
}

export default Users