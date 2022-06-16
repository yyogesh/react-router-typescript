import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
    return <div>
        {children}
    </div>
}

export default RequireAuth