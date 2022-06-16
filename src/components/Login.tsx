import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../common/AuthProvider';


const Login = () => {
    const [user, setUser] = React.useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const location: any = useLocation();

    const redirectPath = location?.state?.path || '/';

    const handleLogin = () => {
        auth?.login(user);
        navigate(redirectPath, { replace: true });
    }

    return (
        <div>
            <label>
                Username:{" "} <input type={'text'} value={user} onChange={e => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login