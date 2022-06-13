import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
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
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            <div>
                {
                    showActiveUsers ? 'Active Users' : 'All Users'
                }
            </div>
        </div>
    )
}

export default Users